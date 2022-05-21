import { useSession } from "next-auth/react";
import useSpotify from "./../hook/useSpotify";
import { currentTrackIdState, isPlayingState } from "./../atoms/songAtom";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  SwitchHorizontalIcon,
  RewindIcon,
  PauseIcon,
  PlayIcon,
  VolumeUpIcon,
  FastForwardIcon,
  ReplyIcon,
} from "@heroicons/react/solid";
import {
  HeartIcon,
  VolumeUpIcon as VolumeDownIcon,
} from "@heroicons/react/outline";
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
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      {/* left */}
      <div className="flex items-center space-x-4">
        <img
          className="h-10 w-10 hidden md:inline"
          src={songInfo?.album.images?.[0]?.url}
          alt="song album"
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>
      {/* center */}
      <div>
        <SwitchHorizontalIcon className="button" />
        <RewindIcon className="button" />
      </div>

      {isPlaying ? (
        <PauseIcon className="button w-10 h-10" />
      ) : (
        <PlayIcon className="button w-10 h-10" />
      )}
    </div>
  );
}

export default Player;