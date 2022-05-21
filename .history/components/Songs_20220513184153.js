import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  useEffect(() => {
    console.log(playlist);
  }, []);

  return (
    <div className="text-white">
      {playlist?.tracks.items.map((track) => {
        <div>{track.track.name}</div>;
      })}
    </div>
  );
}

export default Songs;
