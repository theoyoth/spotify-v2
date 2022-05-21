import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify";
import { currentTrackIdState } from "./../atoms/songAtom";
import { useState } from "react";

export default function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);
}
