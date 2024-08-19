import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid Email Address",
  }),
  password: z.string().min(6, {
    message: "Length should be over 6",
  }),
  code: z.optional(z.string()),
});
