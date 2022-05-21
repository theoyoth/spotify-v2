import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-grow">
      <header>
        <div className="flex items-center space-x-2 bg-black opacity-90 hover:opacity-80 rounded-full p-1 pr-1 border border-white">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image}
            alt="profile picture"
          />
          <h2 className="text-white">{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5 text-white" />
        </div>
      </header>
    </div>
  );
}

export default Center;
