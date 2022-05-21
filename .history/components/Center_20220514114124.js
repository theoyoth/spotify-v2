import { useSession, signOut } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hook/useSpotify";
import Songs from "./Songs";

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
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data?.body);
      })
      .catch((err) => {
        console.error("there something wrong", err);
      });
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center space-x-2 bg-black opacity-90 hover:opacity-80 rounded-full p-1 pr-1"
          onClick={signOut()}
        >
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
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt="album profile"
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
}

export default Center;
