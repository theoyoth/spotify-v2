import { getProviders, signIn, useSession } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  const { data: session } = useSession();
  return (
    <div>
      {/* <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotifyLogo"
      /> */}
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button onClick={() => signIn(provider.id)}>
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default Login;
