import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex-grow">
      <header>
        <div className="flex items-center space-x-2">
          <img src={session?.user?.image} alt="profile picture" />
          <h2 className="text-white">{session?.user?.name}</h2>
        </div>
        <ChevronDownIcon />
      </header>
    </div>
  );
}

export default Center;
