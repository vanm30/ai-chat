import vine from '@vinejs/vine'


export const createUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().trim().optional(),
        email: vine.string().email().unique({ table: 'users', column: 'email' }),
        phoneNumber: vine.string().trim().optional(),
        password: vine.string().minLength(6),
    })
)

export const updateUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().trim().optional(),
        email: vine.string().email().optional(),
        phoneNumber: vine.string().trim().optional(),
    })
)

export const checkEmailAvailabilityValidator = vine.compile(
    vine.object({
        email: vine.string().email()
    })
)

export const idValidator = vine.compile(
    vine.object({
        id: vine.number()
    })
)

export const loginValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(6)
    })
)