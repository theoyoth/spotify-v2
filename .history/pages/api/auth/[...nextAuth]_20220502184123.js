import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/Spotify";

// async function refreshAccessToken(token) {
//   try {
//     spotifyApi.setAccessToken(token.accessToken);
//     spotifyApi.setRefreshToken(token.refreshToken);
//     const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

//     console.log("REFRESH TOKEN IS", refreshedToken);
//     return {
//       ...token,
//       accessToken: refreshedToken.access_token,
//       accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
//       refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
//     };
//   } catch (error) {
//     console.error(error);

//     return {
//       ...token,
//       error: "Refresh access token error",
//     };
//   }
// }
async function refreshAccessToken(token) {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // // Configure one or more authentication providers
  // providers: [
  //   SpotifyProvider({
  //     clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  //     clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  //     authorization: LOGIN_URL,
  //   }),
  // ],
  // secret: process.env.JWT_SECRET,
  // pages: {
  //   signIn: "/login",
  // },
  // callbacks: {
  //   async jwt({ token, account, user }) {
  //     if (account && user) {
  //       // if initial sign in
  //       return {
  //         ...token,
  //         accessToken: account.access_token,
  //         refreshToken: account.refresh_token,
  //         username: account.providerAccountId,
  //         accessTokenExpires: account.expires_at * 1000, //expire time in milliseconds
  //       };
  //     }
  //     // if you get back to the web and the token still valid
  //     if (Date.now() < token.accessTokenExpires) {
  //       return token;
  //     }
  //     // access token expired, we need to refresh it
  //     return await refreshAccessToken(token);
  //   },
  //   async session({ session, token }) {
  //     session.user.accessToken = token.accessToken;
  //     session.user.refreshToken = token.refreshToken;
  //     session.user.username = token.username;
  //     return session;
  //   },
  // },
});
