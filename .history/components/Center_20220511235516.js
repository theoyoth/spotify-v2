import { useSession } from "next-auth/react";

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex-grow">
      <header>
        <div className="flex">
          <img src={session?.user?.image} alt="profile picture" />
          <h2 className="text-white">{session?.user?.name}</h2>
        </div>
      </header>
    </div>
  );
}

export default Center;
