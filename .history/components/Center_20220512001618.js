import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Center() {
  const { data: session } = useSession();

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
      <section className="flex items-end bg-gradient-to-b to-black from-green-500 h-80">
        <h1>section</h1>
      </section>
    </div>
  );
}

export default Center;
