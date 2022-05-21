import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="text-white">
      {playlist?.tracks?.items.map((track) => (
        <div key={track.track.id} className="text-white">
          {track.track.name}
        </div>
      ))}
    </div>
  );
}

export default Songs;
