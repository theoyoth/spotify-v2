import { useSession } from "next-auth/react";
import useSpotify from "./../hook/useSpotify";
import { currentTrackIdState, isPlayingState } from "./../atoms/songAtom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import useSongInfo from "../hook/useSongInfo";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState();

  const songInfo = useSongInfo();

  return (
    <div>
      <div>
        <img src={songInfo?.img} alt="" />
      </div>
    </div>
  );
}

export default Player;
