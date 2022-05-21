import { getProviders, signIn, useSession } from "next-auth/react";
// import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Login({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="bg-black h-screen flex flex-col flex-grow justify-center items-center">
      <Image
        src="https://links.papareact.com/9xl"
        alt="spotifyLogo"
        width="200"
        height="200"
      />
      {Object.values(providers)?.map((provider) => (
        <div key={provider.id} className="mt-4 bg-green-600 p-2 rounded-lg">
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="text-white"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
