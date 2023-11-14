import React, { useState, useEffect } from "react";

// Functional component for displaying a real-time clock
const Clock = () => {
  // State variable to store the current time
  const [time, setTime] = useState(new Date());

  // useEffect hook to update the time every second and clear the interval on component unmount
  useEffect(() => {
    // Set up an interval to update the time every 1000 milliseconds (1 second)
    const interval = setInterval(() => {
      setTime(new Date()); // Update the 'time' state variable with the current date and time
    }, 1000);

    // Clean up function: Clear the interval when the component is unmounted to prevent memory leaks
    return () => {
      clearInterval(interval); // Clear the interval to stop updating the time after component unmount
    };
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  // Format the time to a localized time string
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedTime = time.toLocaleTimeString(); // Mendapatkan waktu dalam format lokal

  const utcOffsetMinutes = time.getTimezoneOffset();
  const isNegativeOffset = utcOffsetMinutes > 0;
  const offsetHours = Math.abs(Math.floor(utcOffsetMinutes / 60));
  const offsetMinutes = Math.abs(utcOffsetMinutes % 60);
  const offsetSign = isNegativeOffset ? '-' : '+';

  const formattedOffset = `${offsetSign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;
  // const utcOffset = time.getTimezoneOffset() / 60; // Mendapatkan offset UTC dalam jam
  //   const currentDate = time.toDateString(); // Mendapatkan tanggal dalam format string
  const currentDate = new Intl.DateTimeFormat("en-US", options).format(time); // Mendapatkan tanggal dalam format "Mon, Nov 06, 2023"
//   const currentDate = new Intl.DateTimeFormat("id-ID", options).format(time); // Mendapatkan tanggal dalam format "Mon, Nov 06, 2023"

  // Render a div element with the formatted time as the content, and assign it a CSS class for styling
  return (
    <div className="flex flex-col items-center text-xs">
      <time className="text-gray-500">{currentDate}</time>
      <span
        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
      >
        {formattedTime} / UTC{formattedOffset}
      </span>
    </div>
  );
};

export default Clock; // Export the Clock component to be used in other parts of the application
