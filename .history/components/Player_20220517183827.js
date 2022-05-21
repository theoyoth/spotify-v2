import { useSession } from "next-auth/react";
import useSpotify from "./../hook/useSpotify";
import { currentTrackIdState, isPlayingState } from "./../atoms/songAtom";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import useSongInfo from "../hook/useSongInfo";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log("sasdasd");
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackId, spotifyApi, session]);

  return (
    <div>
      <div>
        <img
          className="h-10 w-10 hidden md:inline"
          src={songInfo?.album.images?.[0]?.url}
          alt="song album"
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artist}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
