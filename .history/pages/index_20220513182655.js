import Head from "next/head";
import Sidebar from "./../components/Sidebar";
import Center from "./../components/Center";
import { signIn, useSession, getSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  // const user = session.user;

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>spotify-v2</title>
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
