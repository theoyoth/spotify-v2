import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

function Login({ provide }) {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotifyLogo"
      />
      {Object.values(provide).map((provider) => (
        <div key={provider.name}>
          <button>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const provide = await getProviders();
  // const providers = JSON.stringify(provid);

  return {
    props: {
      provide,
    },
  };
}
