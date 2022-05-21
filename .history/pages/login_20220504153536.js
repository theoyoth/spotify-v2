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
    <div>
      <Image
        src="https://links.papareact.com/9xl"
        layout="responsive"
        alt="spotifyLogo"
        width="400"
      />
      {providers.map((provider) => (
        <div key={provider.id}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );

  // const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );
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
