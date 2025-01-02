import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const payload = request.all();

    const user = await User.create({
      fullName: payload.fullName,
      email: payload.email,
      phoneNumber: payload.phoneNumber,
      password: payload.password,
    })

    return response.created(user)
  }
  async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)

    const token = await User.accessTokens.create(user)

    return response.ok({
      type: 'bearer',
      value: token.value!.release(),
    })
  }
}