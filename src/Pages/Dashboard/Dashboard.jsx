import React from "react";
import StatusServerDashboard from "./StatusServerDashboard";
import SystemInformation from "./SystemInformation";
import CallActivity from "./CallActivity";

const Dashboard = () => {
  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</p>
      <p className="text-xl text-gray-600 dark:text-white mb-8">
        Monitoring status and activities.
      </p>
      {/* Status Server */}
      <p className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Status Server
      </p>
      <StatusServerDashboard />
      {/* System Information */}
      <p className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        System Information
      </p>
      <SystemInformation />
      {/* Call Activity */}
      <p id="CallActivitySection" className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Call Activity
      </p>
      <CallActivity />
    </div>
  );
};

export default Dashboard;
