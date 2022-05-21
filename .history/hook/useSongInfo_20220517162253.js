import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify";
import { currentTrackIdState } from "./../atoms/songAtom";
import { useState, useEffect } from "react";

export default function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentIdTrack) {
        const trackInfo = await fetch(`htttps://api.spotify.com/v1/tracks`);
      }
    };
  });

  return songInfo;
}
