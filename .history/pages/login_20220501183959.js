import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import spotifyLogo from "../public/img/spotify-logo.png";

function login({ providers }) {
  return (
    <div>
      <Image src={spotifyLogo} alt="spotifyLogo" />
      <img src={spotifyLogo} alt="spotifyLogo" />
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
