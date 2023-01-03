import React from "react";
import classNames from "classnames";
const successMessage = "Your Beta Key has been sent to your email address";
const failureMessage = "There was an error sending your Beta Key";

const mapping = {
  true: {
    background: "bg-green-50",
    textcolour: "text-green-800",
  },
  false: {
    background: "bg-red-50",
    textcolour: "text-red-800",
  },
};
const SuccessBar = ({ success }: { success: boolean }) => {
  return (
    <div
      className={classNames({
        "rounded-md p-4": true,
        "bg-green-50": success,
        "bg-red-50": !success,
      })}
    >
      <div className="flex">
        <div className="flex-shrink-0"></div>
        <div className="ml-3">
          <p
            className="text-sm font-medium"
            // v-bind:class="mapping[success].textcolour"
          >
            {success ? successMessage : failureMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessBar;
