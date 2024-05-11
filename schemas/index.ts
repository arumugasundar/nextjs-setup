import * as z from "zod";

export const UserSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    })
})