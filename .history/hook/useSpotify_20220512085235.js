import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { SpotifyWebApi } from "spotify-web-api-node";

function useSpotify() {
  const { data: session, status } = useSession();
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  });

  useEffect(() => {
    if (session) {
      // if refresh access token fail, direct user to login
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
    }
    spotifyApi.setAccessToken(session.user.access_token);
  }, [session]);

  return null;
}

export default useSpotify;
