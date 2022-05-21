import useSpotify from "./useSpotify";

export default function useSongInfo() {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] = useRecoilState();
  return <div>useSongInfo</div>;
}
