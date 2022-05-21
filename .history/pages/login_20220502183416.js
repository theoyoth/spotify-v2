import { getProviders, signIn, useSession } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotifyLogo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  // const providers = JSON.stringify(provid);

  return {
    props: {
      providers,
    },
  };
}
