import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { checkEmailAvailabilityValidator, idValidator, updateUserValidator } from '#validators/user'

export default class UsersController {
    async checkEmailAvailability({ request, response }: HttpContext) {
        const payload = await request.validateUsing(checkEmailAvailabilityValidator);
        console.log(payload.email);

        const emailExists = await User.query().where('email', payload.email).first();

        if (emailExists) {
            return response.status(400).send({ message: 'Email is already taken' })
        } else
            return response.status(200).send({ message: 'Email is available' })
    }

    async deleteUser({ params, response, auth }: HttpContext) {
        const payload = await idValidator.validate(params)

        const user = await auth.authenticate();
        const userToDelete = await User.find(payload.id)

        if (!userToDelete) {
            return response.status(404).json({
                message: 'User not found'
            })
        }

        if (user.id !== userToDelete.id) {
            return response.status(403).send({ message: 'Forbidden' })
        }

        await userToDelete.delete()

        return response.status(200).json({
            message: 'User deleted'
        })

    }
    async updateUser({ params, request, response, auth }: HttpContext) {
        const payload = await request.validateUsing(updateUserValidator);
        await idValidator.validate(params)

        const user = await auth.authenticate();
        const userToUpdate = await User.find(params.id)

        if (!userToUpdate) {
            return response.status(404).send({ message: 'User not found' })
        }

        if (user.id !== userToUpdate.id) {
            return response.status(403).send({ message: 'Forbidden' })
        }

        userToUpdate.fullName = payload.fullName || userToUpdate.fullName
        userToUpdate.email = payload.email || userToUpdate.email
        userToUpdate.phoneNumber = payload.phoneNumber || userToUpdate.phoneNumber

        await userToUpdate.save()

        return response.status(200).send({
            message: 'User updated successfully', userToUpdate
        })
    }
}