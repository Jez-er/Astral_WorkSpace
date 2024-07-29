import {z} from 'zod'


export const registrationSchema = z.object({
    Login: z.string().min(3, 'Login must contain at least 3 characters'),
    Email: z.string().email('Invalid e-mail'),
    Password: z.string()
    .min(8, 'Password must contain at least 8 characters')
    .regex(/[0-9]/, 'The password must contain at least one number')
    .regex(/[A-Z]/, 'The password must contain at least one capital letter')
    .regex(/[a-z]/, 'The password must contain at least one lowercase letter')
    .regex(/[^a-zA-Z0-9]/, 'The password must contain at least one special character'),
    DisplayName: z.string(),
    HowDid: z.string(),
})

export type RegisterForm = z.infer<typeof registrationSchema>;

export const loginSchema = z.object({
    Email: z.string().email('Invalid e-mail'),
    Password: z.string()
    .min(8, 'Password must contain at least 8 characters')
})

export type LoginForm = z.infer<typeof loginSchema>


export const passSchema = z.object({
    Email: z.string().email('Invalid e-mail'),
})

export type PassForm = z.infer<typeof passSchema>