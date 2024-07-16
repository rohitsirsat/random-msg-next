import NextAuth from "next-auth/next";
import { authOptions } from "./options";

const handler = NextAuth(authOptions); // eslint-disable-line import/prefer-default-export

export { handler as GET, handler as POST };
