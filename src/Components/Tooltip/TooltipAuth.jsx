import { Tooltip } from "flowbite-react";
import React from "react";

const TooltipAuth = (props) => {
  return (
    <Tooltip
      className="bg-white dark:bg-white"
      content={
        <div className="p-3 space-y-2 text-gray-900 dark:text-white bg-white dark:bg-white">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Follow these instructions to secure your password:
          </h3>
          <ul>
            <li className="flex items-center mb-1">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have at least 8 characters
            </li>
            <li className="flex items-center mb-1">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have at least 1 number
            </li>
            <li className="flex items-center mb-1">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have at least 1 symbol (#$&amp;)
            </li>
            <li className="flex items-center mb-1">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have upper &amp; lower case letters
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 mr-2.5 text-red-600 dark:text-red-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              Password cannot be the same as username
            </li>
          </ul>
        </div>
      }
      placement="right"
    >
      {props.content}
    </Tooltip>
  );
};

export default TooltipAuth;
