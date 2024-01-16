import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

// const providers = [];
// if (process.env.VERCEL_ENV === "preview") {
//   providers.push(
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "plant" },
//         password: { label: "Password", type: "password", placeholder: "buddy"},
//       },
//       async authorize(credentials, req) {
//         if (
//           credentials.username === "plant" &&
//           credentials.password === "buddy"
//         ) {
//           return {
//             name: "Buddy",
//           };
//         } else {
//           return null;
//         }
//       },
//     })
//   );
// } else {
//   providers.push(
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     })
//   );
// }

// export const authOptions = {
//   providers,
// };
// export default NextAuth(authOptions);

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
