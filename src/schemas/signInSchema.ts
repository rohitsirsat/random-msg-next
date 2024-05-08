import { z } from "zod";

// indentifier ==> we can call it as username or email (identifier is better word used in production)
export const signInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
