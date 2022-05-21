import { useSession,signIn } from "next-auth/react";
import { useEffect } from 'react';

function useSpotify() {
  const { data: session, status } = useSession();
  useEffect(() => {
    id(session){
      if(session.error === 'RefreshAccessTokenError'){
        signIn()
      }
    }
  }, [session])
  
  return null;
}

export default useSpotify;
