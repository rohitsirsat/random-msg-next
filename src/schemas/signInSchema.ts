import { z } from "zod";

export const signInSchema = z.object({
  identifier: z
    .string()
    .min(3, "Email must be at least 3 characters long")
    .max(50, "Email must be at most 50 characters long")
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
