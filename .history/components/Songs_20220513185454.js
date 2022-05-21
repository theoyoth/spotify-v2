import { playlistState } from "../atoms/playlistAtom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  useEffect(() => {
    playlist.tracks.items.map((track) => {
      console.log(track);
    });
  }, []);

  return (
    <div className="text-white">
      {playlist?.tracks?.items.map((track) => (
        <div key={track.track.name} className="text-white">
          {track.track.name}
        </div>
      ))}
    </div>
  );
}

export default Songs;
