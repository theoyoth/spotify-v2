import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "./../hook/useSpotify";

const colors = [
  "from-indigo-500",
  "from-red-500",
  "from-green-500",
  "from-blue-500",
  "from-yellow-500",
  "from-gray-500",
  "from-purple-500",
];

function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlists, setPlaylists] = useRecoilState(playlistState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => {
      setPlaylists(data?.body);
    });
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center space-x-2 bg-black opacity-90 hover:opacity-80 rounded-full p-1 pr-1">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image}
            alt="profile picture"
          />
          <h2 className="text-white">{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5 text-white" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 padding-8 text-white`}
      >
        <h1>section</h1>
      </section>
    </div>
  );
}

export default Center;
