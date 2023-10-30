import React from "react";
import Header from "./Header";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <Header />
      <div className="m-20 min-h-[200px] max-w-lg mx-auto rounded-lg bg-gray-200 p-10 flex flex-col items-left">
        <h1 className="text-4xl ">OOPS !!!</h1>
        <h2 className="mt-4 ">Something is not right 😭</h2>
        <h3>{err.status}</h3>
        <h3>{err.statusText}</h3>
      </div>
    </div>
  );
};

export default Error;
