import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../util/connect"
import User from "../../../models/UserModel";

export default nextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token._id = user.id
      return token
    },
    async session({ session, token }) {
      session.user._id = token._id;
      return session
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
        _id: {
          label: "Id",
          type: "id",
        },
      },
      async authorize(credentials) {
        await db.connectMongo();
        const user = await User.findOne({
          email: credentials?.email,
        });
        await db.disconnectMongo();
        if (!user) {
          throw new Error('Invalid email or password');
        }
        return user
      },
    })
  ]
})