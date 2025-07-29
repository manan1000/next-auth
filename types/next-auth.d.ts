import { DefaultSession } from "next-auth"

declare module "next-auth" {

    interface Session{
        user: User & DefaultSession["users"];
    }

    interface User {
        role: string | null
    }
}