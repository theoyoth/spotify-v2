import { useSession } from "next-auth/react";
import { useEffect } from 'react';

function useSpotify() {
  const { data: session, status } = useSession();
  useEffect(() => {
    id(session){
      if(session.error === '')
    }
  }, [session])
  
  return null;
}

export default useSpotify;
