import NextAuth from "next-auth";


import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import FacebookProvider from "next-auth/providers/facebook";

const clientId = process.env.GOOGLE_CLIENT_ID as string;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
});
export { handler as GET, handler as POST };
