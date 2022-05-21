import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import useSpotify from "../hook/useSpotify";

const Sidebar = () => {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
      <div className="space-y-4">
        <button
          className="flex item-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <LogoutIcon className="h-4 w-4" />
          <p>Logout</p>
        </button>
        <button className="flex item-center space-x-2 hover:text-white">
          <HomeIcon className="h-4 w-4" />
          <p>Home</p>
        </button>
        <button className="flex item-center space-x-2 hover:text-white">
          <SearchIcon className="h-4 w-4" />
          <p>Search</p>
        </button>
        <button className="flex item-center space-x-2 hover:text-white">
          <LibraryIcon className="h-4 w-4" />
          <p>Your Library</p>
        </button>
        <hr className="border-gray-900" />
        <button className="flex item-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-4 w-4" />
          <p>Create Playlist</p>
        </button>
        <button className="flex item-center space-x-2 hover:text-white">
          <HeartIcon className="h-4 w-4" />
          <p>Liked Songs</p>
        </button>
        <button className="flex item-center space-x-2 hover:text-white">
          <RssIcon className="h-4 w-4" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-gray-900" />
        {playlists.map((item) => {
          <p key={item.id}>{item.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
