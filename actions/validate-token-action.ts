"use server"

import { ErrorResponseSchema, SuccessSchema, TokenSchema } from "@/src/schemas"

type ActionStateType = {
    errors: string[]
    success: string
}

export async function validateToken(token: string, prevState: ActionStateType) {

    const restPasswordToken = TokenSchema.safeParse(token)
    if (!restPasswordToken.success) {
        return {
            errors: restPasswordToken.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const url = `${process.env.API_URL}/auth/validate-token`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            token: restPasswordToken.data
        })
    })

    const json = await req.json()
    if (!req.ok) {
        const { error } = ErrorResponseSchema.parse(json)
        return {
            errors: [error],
            success: ''
        }
    }

    const success = SuccessSchema.parse(json)

    return {
        errors: [],
        success
    }
}