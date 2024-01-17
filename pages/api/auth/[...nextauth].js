import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

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
        username: { label: "Username", type: "text", placeholder: "plant" },
        password: { label: "Password", type: "password", placeholder: "buddy" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "plant" &&
          credentials.password === "buddy"
        ) {
          return {
            name: "Buddy",
          };
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
