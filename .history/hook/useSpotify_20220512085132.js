import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

function useSpotify() {
  const { data: session, status } = useSession();
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
