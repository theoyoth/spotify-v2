import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import spotifyLogo from "../public/img/spotify-logo.png";

function login({ providers }) {
  return (
    <div>
      {/* <Image src={spotifyLogo} alt="spotifyLogo" layout="responsive" /> */}
      <img className="w-52" src="https://links.papareact.com/9xl" alt="" />
      <h1>Login</h1>
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
