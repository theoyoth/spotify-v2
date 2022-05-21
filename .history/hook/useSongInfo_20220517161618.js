import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify";
import { currentTrackIdState, isPlayingState } from "./../atoms/songAtom";
import { useState } from "react";

export default function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [songInfo, setSongInfo] = useState(null);
}
