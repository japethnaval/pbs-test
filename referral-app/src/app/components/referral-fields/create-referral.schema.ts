import { z } from 'zod'

export type CreateReferralFormData = z.infer<typeof CreateReferralSchema>

export const CreateReferralSchema = z.object({
    given_name: z.string().trim().min(1, 'This field is required'),
    surname: z.string().trim().min(1, 'This field is required'),
    email: z.string().email('Invalid email').min(1, 'This field is required'),
    phone: z.string().min(1, 'This field is required'),
    home_address: z.string().min(1, 'This field is required'),
    street: z.string().min(1, 'This field is required'),
    state: z.string().min(1, 'This field is required'),
    suburb: z.string().min(1, 'This field is required'),
    postcode: z.string().min(1, 'This field is required'),
    country: z.string().min(1, 'This field is required'),
})
