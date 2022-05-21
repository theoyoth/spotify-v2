import { getProviders, signIn } from "next-auth/react";
import spotifyLogo from "../public/img/spotify-logo.png";
function login({ providers }) {
  return (
    <div>
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
