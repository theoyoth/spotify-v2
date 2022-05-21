import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks?.items.map((track) => (
        <Song />
      ))}
    </div>
  );
}

export default Songs;
