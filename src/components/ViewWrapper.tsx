import { NextPage } from "next";
import React from "react";

const ViewWrapper: NextPage<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-back bg-dotted-spacing-8 bg-dotted-gray-800">
      <div className="mx-auto min-h-screen max-w-7xl sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default ViewWrapper;
