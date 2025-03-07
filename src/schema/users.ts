import { z } from 'zod';

export const SignUpSchema = z.object ({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6),
})