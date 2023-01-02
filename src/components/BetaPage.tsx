import React from "react";
import { trpc } from "../utils/trpc";

const BetaPage = () => {
  const betakeys = trpc.beta.getkeys.useQuery();

  return (
    <div className="relative">
      <div
        className="bg-warm-gray-50 absolute left-0 right-0 h-1/2"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="rounded-3xl bg-zinc-800 bg-gradient-to-l py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              We are Currently in Beta
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-cyan-100">
              There are currently {betakeys.data?.keys} beta keys left. Enter
              your email below to receive a beta key.
            </p>
          </div>
          <form>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <div className="sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="placeholder-warm-gray-500 w-full rounded-md border-white px-5 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-5 py-3 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Send me a key
                </button>
              </div>
              <h3
                className="mt-xs block font-medium text-red-500"
                name="email"
              />
              <p className="mt-3 text-sm text-cyan-100">
                We will never spam you at this email address.{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetaPage;
