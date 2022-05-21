import { useSession } from "next-auth/react";

function Center() {
  const { data: session } = useSession();
  return (
    <div className="flex-grow">
      <h1>this is Center</h1>
    </div>
  );
}

export default Center;
