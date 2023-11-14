import React, { useState, useEffect, useRef } from "react";
import ErrorButton from "../Button/ErrorButton";

const ErrorToastAuth = (props) => {
  const [showToast] = useState(true);
  const toastRef = useRef(null);

  useEffect(() => {
    // Fokuskan elemen toast saat komponen telah dimount dan showToast adalah true
    if (showToast && toastRef.current) {
      toastRef.current.focus();
    }
  }, [showToast]);

  if (!showToast) {
    return null; // Jangan render komponen jika showToast adalah false
  }

  return (
    <div
      ref={toastRef}
      tabIndex={-1}
      className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
      role="alert"
      >
      <ErrorButton />
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium ml-2">{props.message}!</span>
      </div>
      {/* <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={handleCloseClick}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
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
        </button> */}
    </div>
  );
};

export default ErrorToastAuth;