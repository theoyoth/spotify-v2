import { getProviders, signIn } from "next-auth/react";

function login() {
  return <div>login</div>;
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
}
