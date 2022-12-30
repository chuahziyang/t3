const features = [
  { name: "Push to Deploy" },
  { name: "SSL Certificates" },
  { name: "Simple Queues" },
  { name: "Advanced Security" },
  { name: "Powerful API" },
  { name: "Database Backups" },
];

const FeatureList = () => {
  return (
    <div className="relative  py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="border-zinc-800rounded-lg flow-root bg-zinc-900  px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-100">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
