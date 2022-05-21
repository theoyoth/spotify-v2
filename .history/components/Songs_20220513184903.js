import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  useEffect(() => {
    playlist.tracks.items.map((track) => {
      console.log(track.track.name);
    });
  }, []);

  return (
    <div className="text-white">
      {playlist?.tracks.items.forEach((track) => {
        <div className="text-white">{track.track.name}</div>;
      })}
    </div>
  );
}

export default Songs;
