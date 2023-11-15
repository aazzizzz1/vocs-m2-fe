import React, { useState, useEffect, useRef } from "react";
import ErrorButton from "../Button/ErrorButton";

const OnlineToast = (props) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef(null);

  const handleOnline = () => {
    setIsOnline(true);
    setShowToast(false);
  };

  const handleOffline = () => {
    setIsOnline(false);
    setShowToast(true);
  };

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Focus the toast element when the component is mounted and showToast is true
    if (showToast && toastRef.current) {
      toastRef.current.focus();
    }
  }, [showToast]);

  if (!showToast) {
    return null; // Don't render the component if showToast is false
  }

  return (
    <div
      ref={toastRef}
      tabIndex={-1}
      className={`flex items-center p-2 text-sm ${
        isOnline ? 'hidden' : 'text-red-800 border border-red-300 bg-red-50'
      } rounded-lg dark:bg-gray-800 dark:text-red-400 dark:border-red-800`}
      role="alert"
    >
      <ErrorButton />
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium ml-2">you are currently offline!!</span>
      </div>
    </div>
  );
};

export default OnlineToast;
