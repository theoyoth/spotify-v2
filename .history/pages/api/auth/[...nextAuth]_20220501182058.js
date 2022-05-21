import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/Spotify";

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    console.log("REFRESH TOKEN IS", refreshedToken);
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: "Refresh access token error",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callback: {
    async jwt({ token, account, user }) {
      if (account && user) {
        // if initial sign in
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, //expire time in milliseconds
        };
      }
      // if you get back to the web and the token still valid
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
      // access token expired, we need to refresh it
      return await refreshAccessToken(token);
    },
  },
});
