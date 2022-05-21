import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="text-white">
      {playlist?.tracks.items.map((track) => {
        <p>{track.track.name}</p>;
      })}
    </div>
  );
}

export default Songs;
