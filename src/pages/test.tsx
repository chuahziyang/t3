import { useSession } from "next-auth/react";
import React from "react";
import { signIn } from "next-auth/react";

const test = () => {
  const { data: session } = useSession();

  signIn();
  console.log(session);

  return (
    <>
      <div>data{session}</div>
    </>
  );
};

export default test;
