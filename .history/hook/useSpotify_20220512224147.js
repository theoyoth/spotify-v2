import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";
import spotifyApi from "../lib/Spotify";

// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//   clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
// });

function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // if refresh access token fail, direct user to login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
    }
    const access = session.accessToken;
    spotifyApi.setAccessToken(access);
  }, [session]);

  return spotifyApi;
}

export default useSpotify;
