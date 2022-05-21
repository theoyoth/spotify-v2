import Head from "next/head";
import Sidebar from "./../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>spotify-v2</title>
      </Head>
      <main>
        <Sidebar />
      </main>
    </div>
  );
}
