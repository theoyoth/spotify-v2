import { useSession } from "next-auth/react";
import useSpotify from "./../hook/useSpotify";
import { currentTrackIdState, isPlayingState } from "./../atoms/songAtom";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Player;
