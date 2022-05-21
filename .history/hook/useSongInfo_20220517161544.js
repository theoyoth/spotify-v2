import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify";
import { currentTrackIdState, isPlayingState } from "./../atoms/songAtom";

export default function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  return <div>useSongInfo</div>;
}
