import { playlistState } from "../atoms/playlistAtom";

function Songs() {
  return (
    <div className="text-white">
      {playlistState?.tracks?.items?.items?.map((track) => {
        <div>{track.track.name}</div>;
      })}
    </div>
  );
}

export default Songs;
