import { useState } from "react";
import FeatureList from "../components/FeatureList";
import ViewWrapper from "../components/ViewWrapper";
import { Header } from "../components/Header";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ViewWrapper flex={false}>
      <Header />
      <div className="isolate ">
        <div className="px-6 pt-6 lg:px-8">
          <div>
            {/* <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel
                focus="true"
                classNameName="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
              >
                <div classNameName="flex h-9 items-center justify-between">
                  <div classNameName="flex">
                    <a href="#" classNameName="-m-1.5 p-1.5">
                      <span classNameName="sr-only">Your Company</span>
                      <img
                        classNameName="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>
                  <div classNameName="flex">
                    <button
                      type="button"
                      classNameName="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span classNameName="sr-only">Close menu</span>
                    </button>
                  </div>
                </div>
                <div classNameName="mt-6 flow-root">
                  <div classNameName="-my-6 divide-y divide-gray-500/10">
                    <div classNameName="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          classNameName="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div classNameName="py-6">
                      <a
                        href="#"
                        classNameName="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog> */}
          </div>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-center sm:text-6xl">
                    Finally, a personal website you can be proud of
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-center">
                    No more messing with wordpress templates and custom domains,
                    Ro and Co makes it easy to create your own personal website
                    in minutes, not days.
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                      href="/beta"
                      className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      Get started
                      <span className="text-indigo-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                    <a
                      href="/demo"
                      className="inline-block rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      Live demo
                      <span className="text-gray-400" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
                {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9089FC" />
                        <stop offset="1" stop-color="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
          <FeatureList></FeatureList>
        </main>
      </div>
    </ViewWrapper>
  );
};

export default Index;
