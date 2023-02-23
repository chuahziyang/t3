import { NextPage } from "next";
import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  flex: Boolean;
}

const ViewWrapper: NextPage<Props> = ({ children, flex }) => {
  return (
    <div className="bg-back bg-dotted-spacing-8 bg-dotted-gray-800">
      <div
        className={classNames(
          `mx-auto min-h-screen max-w-7xl sm:px-6 lg:px-8`,
          { "flex items-center justify-center": flex }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ViewWrapper;
