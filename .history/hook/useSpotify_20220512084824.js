import { useSession } from "next-auth/react";

function useSpotify() {
  const { data: session } = useSession();
  return null;
}

export default useSpotify;
