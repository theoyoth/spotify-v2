import { useSession } from "next-auth/react";

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex-grow flex">
      <header>
        <img src={session?.user?.image} alt="profile picture" />
      </header>
      <h2 className="text-white">{session?.user?.name}</h2>
    </div>
  );
}

export default Center;
