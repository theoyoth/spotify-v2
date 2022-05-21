import { millisMinutesAndSeconds } from "../lib/time";

function Song({ track, order }) {
  return (
    <div className="grid grid-cols-2">
      <div>
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track?.album?.images[0].url}
          alt="cover song"
        />
        <div>
          <p>{track.track?.album?.name}</p>
          <p></p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline">{track.track?.album.name}</p>
        <p>{millisMinutesAndSeconds(track?.track?.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
