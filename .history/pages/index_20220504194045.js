import Head from "next/head";
import Sidebar from "./../components/Sidebar";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(data);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>spotify-v2</title>
      </Head>
      <main>
        <button onClick={() => signIn()}>sign in</button>
        {/* <Sidebar /> */}
      </main>
    </div>
  );
}
