// types/auth.d.ts
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUs {
    id?: string;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    token: string;
  }
}
