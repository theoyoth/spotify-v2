import { millisMinutesAndSeconds } from "../lib/time";
import useSpotify from "../hook/useSpotify";

function Song({ track, order }) {
  const SpotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);

  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  return (
    <div className="grid grid-cols-2 text-gray-500 mt-4 py-4 px-5 hover:bg-gray-900 cursor-pointer rounded-lg">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track?.album?.images[0].url}
          alt="cover song"
        />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">
            {track.track?.name}
          </p>
          <p className="w-40">{track.track?.artists[0]?.name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline w-40">{track.track?.album.name}</p>
        <p>{millisMinutesAndSeconds(track?.track?.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
