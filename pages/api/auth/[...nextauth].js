import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
        name: "credentials",
        credentials: {
        username: {label: "Username", type: "text", placeholder: "username" },
        password: {label: "Password", type: "password"},
        },
        async authorize(credentials) {
            if (
                credentials.username === "plant" &&
                credentials.password === "buddy"
            ) {
                return {
                    name: "Buddy"
                };
            } else {
                return <h2>Access Denied</h2>
            }
        }
    })
  ],
}

export default NextAuth(authOptions)