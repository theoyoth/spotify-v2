import { useSession } from "next-auth/react";

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex-grow">
      <h1>this is Center</h1>
      <header>
        <img src={session?.user?.image} alt="profile picture" />
      </header>
    </div>
  );
}

export default Center;
