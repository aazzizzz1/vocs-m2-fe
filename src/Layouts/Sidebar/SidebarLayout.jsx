import React, { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FolderManager from "../../Assets/Svg/FolderManager";
import { Accordion } from "flowbite-react";
// import { Sidebar } from "flowbite-react";
// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
// } from "react-icons/hi";

const SidebarLayout = () => {
  const location = useLocation(); // Get the current location

  // Define a function to check if a link is active
  const isActiveLink = useCallback(
    (href) => {
      return location.pathname === href;
    },
    [location.pathname]
  );

  useEffect(() => {
    const dropdown = document.getElementById("dropdown-authentication");
    if (
      dropdown &&
      !isActiveLink("/") &&
      !isActiveLink("/log-status") &&
      !isActiveLink("/communication-matrix")
    ) {
      dropdown.classList.remove("hidden");
    }
  }, [isActiveLink, location.pathname]); // Run the effect whenever location.pathname changes

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      {/* <Sidebar aria-label="rtrt" className="bg-white">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Sidebar.Item href="#">Products</Sidebar.Item>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                <Sidebar.Item href="#">Shipping</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar> */}
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        {/* Item Sidebar */}
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                isActiveLink("/")
                  ? "bg-blue-600 text-white hover:text-gray-700"
                  : ""
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_815_1917"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_815_1917)">
                  <path
                    d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H11V5H5V19ZM13 19H19V12H13V19ZM13 10H19V5H13V10Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              <p className="ml-3">Dashboard</p>
            </Link>
          </li>
          <li>
            <Accordion
            className="border-none divide-none bg-gray-100"
            >
              <Accordion.Panel>
                <Accordion.Title className="py-1 px-1 focus:ring-0 text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  {
                      <span className="flex flex-row">
                      <FolderManager />
                        <p className="ml-4">
                          System Management
                          </p>
                      </span>
                  }
                </Accordion.Title>
                <Accordion.Content
                class="py-2 space-y-2 ml-5 dark:bg-gray-900 border-none"
                >
                  <li>
                <Link
                to="/server-manager"
                  className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                    isActiveLink("/server-manager")
                      ? "bg-blue-600 text-white hover:text-gray-700"
                      : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_828_2646"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_828_2646)">
                      <path
                        d="M7.5 6C7.08333 6 6.72917 6.14583 6.4375 6.4375C6.14583 6.72917 6 7.08333 6 7.5C6 7.91667 6.14583 8.27083 6.4375 8.5625C6.72917 8.85417 7.08333 9 7.5 9C7.91667 9 8.27083 8.85417 8.5625 8.5625C8.85417 8.27083 9 7.91667 9 7.5C9 7.08333 8.85417 6.72917 8.5625 6.4375C8.27083 6.14583 7.91667 6 7.5 6ZM7.5 16C7.08333 16 6.72917 16.1458 6.4375 16.4375C6.14583 16.7292 6 17.0833 6 17.5C6 17.9167 6.14583 18.2708 6.4375 18.5625C6.72917 18.8542 7.08333 19 7.5 19C7.91667 19 8.27083 18.8542 8.5625 18.5625C8.85417 18.2708 9 17.9167 9 17.5C9 17.0833 8.85417 16.7292 8.5625 16.4375C8.27083 16.1458 7.91667 16 7.5 16ZM4 3H20C20.2833 3 20.5208 3.09583 20.7125 3.2875C20.9042 3.47917 21 3.71667 21 4V11C21 11.2833 20.9042 11.5208 20.7125 11.7125C20.5208 11.9042 20.2833 12 20 12H4C3.71667 12 3.47917 11.9042 3.2875 11.7125C3.09583 11.5208 3 11.2833 3 11V4C3 3.71667 3.09583 3.47917 3.2875 3.2875C3.47917 3.09583 3.71667 3 4 3ZM5 5V10H19V5H5ZM4 13H20C20.2833 13 20.5208 13.0958 20.7125 13.2875C20.9042 13.4792 21 13.7167 21 14V21C21 21.2833 20.9042 21.5208 20.7125 21.7125C20.5208 21.9042 20.2833 22 20 22H4C3.71667 22 3.47917 21.9042 3.2875 21.7125C3.09583 21.5208 3 21.2833 3 21V14C3 13.7167 3.09583 13.4792 3.2875 13.2875C3.47917 13.0958 3.71667 13 4 13ZM5 15V20H19V15H5Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <p className="ml-3">Server Manager</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/device-manager"
                  className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                    isActiveLink("/device-manager")
                      ? "bg-blue-600 text-white hover:text-gray-700"
                      : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_828_2651"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_828_2651)">
                      <path
                        d="M2 20V17H4V6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4H21V6H6V17H12V20H2ZM15 20C14.7167 20 14.4792 19.9042 14.2875 19.7125C14.0958 19.5208 14 19.2833 14 19V9C14 8.71667 14.0958 8.47917 14.2875 8.2875C14.4792 8.09583 14.7167 8 15 8H21C21.2833 8 21.5208 8.09583 21.7125 8.2875C21.9042 8.47917 22 8.71667 22 9V19C22 19.2833 21.9042 19.5208 21.7125 19.7125C21.5208 19.9042 21.2833 20 21 20H15ZM16 17H20V10H16V17Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <p className="ml-3">Device Manager</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/device-activity"
                  className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                    isActiveLink("/device-activity")
                      ? "bg-blue-600 text-white hover:text-gray-700"
                      : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_828_2656"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_828_2656)">
                      <path
                        d="M2 9V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V9H20V5H4V9H2ZM4 18C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V11H4V16H20V11H22V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H4ZM1 21V19H23V21H1ZM2 11V9H8C8.18333 9 8.35833 9.05 8.525 9.15C8.69167 9.25 8.81667 9.38333 8.9 9.55L10.075 11.875L13.15 6.5C13.2333 6.35 13.35 6.22917 13.5 6.1375C13.65 6.04583 13.8167 6 14 6C14.1833 6 14.3583 6.04583 14.525 6.1375C14.6917 6.22917 14.8167 6.36667 14.9 6.55L16.125 9H22V11H15.5C15.3167 11 15.1417 10.9542 14.975 10.8625C14.8083 10.7708 14.6833 10.6333 14.6 10.45L13.95 9.125L10.875 14.5C10.7917 14.6667 10.6667 14.7917 10.5 14.875C10.3333 14.9583 10.1583 15 9.975 15C9.79167 15 9.62083 14.95 9.4625 14.85C9.30417 14.75 9.18333 14.6167 9.1 14.45L7.375 11H2Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <p className="ml-3">Device Activity</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/sip-account"
                  className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                    isActiveLink("/sip-account")
                      ? "bg-blue-600 text-white hover:text-gray-700"
                      : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_828_2661"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_828_2661)">
                      <path
                        d="M11 15H13V9H11V15ZM14 15H15.5V13H18C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12V10C19 9.71667 18.9042 9.47917 18.7125 9.2875C18.5208 9.09583 18.2833 9 18 9H14V15ZM5 15H9C9.28333 15 9.52083 14.9042 9.7125 14.7125C9.90417 14.5208 10 14.2833 10 14V12.25C10 11.9667 9.90417 11.7292 9.7125 11.5375C9.52083 11.3458 9.28333 11.25 9 11.25H6.5V10.5H10V9H6C5.71667 9 5.47917 9.09583 5.2875 9.2875C5.09583 9.47917 5 9.71667 5 10V11.75C5 12.0333 5.09583 12.2708 5.2875 12.4625C5.47917 12.6542 5.71667 12.75 6 12.75H8.5V13.5H5V15ZM15.5 11.5V10.5H17.5V11.5H15.5ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V6H4V18Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <p className="ml-3">SIP Account</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/group-list"
                  className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                    isActiveLink("/group-list")
                      ? "bg-blue-600 text-white hover:text-gray-700"
                      : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_828_2666"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_828_2666)">
                      <path
                        d="M0 18V16.425C0 15.7083 0.366667 15.125 1.1 14.675C1.83333 14.225 2.8 14 4 14C4.21667 14 4.425 14.0042 4.625 14.0125C4.825 14.0208 5.01667 14.0417 5.2 14.075C4.96667 14.425 4.79167 14.7917 4.675 15.175C4.55833 15.5583 4.5 15.9583 4.5 16.375V18H0ZM6 18V16.375C6 15.8417 6.14583 15.3542 6.4375 14.9125C6.72917 14.4708 7.14167 14.0833 7.675 13.75C8.20833 13.4167 8.84583 13.1667 9.5875 13C10.3292 12.8333 11.1333 12.75 12 12.75C12.8833 12.75 13.6958 12.8333 14.4375 13C15.1792 13.1667 15.8167 13.4167 16.35 13.75C16.8833 14.0833 17.2917 14.4708 17.575 14.9125C17.8583 15.3542 18 15.8417 18 16.375V18H6ZM19.5 18V16.375C19.5 15.9417 19.4458 15.5333 19.3375 15.15C19.2292 14.7667 19.0667 14.4083 18.85 14.075C19.0333 14.0417 19.2208 14.0208 19.4125 14.0125C19.6042 14.0042 19.8 14 20 14C21.2 14 22.1667 14.2208 22.9 14.6625C23.6333 15.1042 24 15.6917 24 16.425V18H19.5ZM8.125 16H15.9C15.7333 15.6667 15.2708 15.375 14.5125 15.125C13.7542 14.875 12.9167 14.75 12 14.75C11.0833 14.75 10.2458 14.875 9.4875 15.125C8.72917 15.375 8.275 15.6667 8.125 16ZM4 13C3.45 13 2.97917 12.8042 2.5875 12.4125C2.19583 12.0208 2 11.55 2 11C2 10.4333 2.19583 9.95833 2.5875 9.575C2.97917 9.19167 3.45 9 4 9C4.56667 9 5.04167 9.19167 5.425 9.575C5.80833 9.95833 6 10.4333 6 11C6 11.55 5.80833 12.0208 5.425 12.4125C5.04167 12.8042 4.56667 13 4 13ZM20 13C19.45 13 18.9792 12.8042 18.5875 12.4125C18.1958 12.0208 18 11.55 18 11C18 10.4333 18.1958 9.95833 18.5875 9.575C18.9792 9.19167 19.45 9 20 9C20.5667 9 21.0417 9.19167 21.425 9.575C21.8083 9.95833 22 10.4333 22 11C22 11.55 21.8083 12.0208 21.425 12.4125C21.0417 12.8042 20.5667 13 20 13ZM12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9C9 8.15 9.29167 7.4375 9.875 6.8625C10.4583 6.2875 11.1667 6 12 6C12.85 6 13.5625 6.2875 14.1375 6.8625C14.7125 7.4375 15 8.15 15 9C15 9.83333 14.7125 10.5417 14.1375 11.125C13.5625 11.7083 12.85 12 12 12ZM12 10C12.2833 10 12.5208 9.90417 12.7125 9.7125C12.9042 9.52083 13 9.28333 13 9C13 8.71667 12.9042 8.47917 12.7125 8.2875C12.5208 8.09583 12.2833 8 12 8C11.7167 8 11.4792 8.09583 11.2875 8.2875C11.0958 8.47917 11 8.71667 11 9C11 9.28333 11.0958 9.52083 11.2875 9.7125C11.4792 9.90417 11.7167 10 12 10Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <p className="ml-3">Group List</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/user-manager"
                  className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                    isActiveLink("/user-manager")
                      ? "bg-blue-600 text-white hover:text-gray-700"
                      : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_828_2676"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_828_2676)">
                      <path
                        d="M10 12C8.9 12 7.95833 11.6083 7.175 10.825C6.39167 10.0417 6 9.1 6 8C6 6.9 6.39167 5.95833 7.175 5.175C7.95833 4.39167 8.9 4 10 4C11.1 4 12.0417 4.39167 12.825 5.175C13.6083 5.95833 14 6.9 14 8C14 9.1 13.6083 10.0417 12.825 10.825C12.0417 11.6083 11.1 12 10 12ZM2 18V17.2C2 16.65 2.14167 16.1333 2.425 15.65C2.70833 15.1667 3.1 14.8 3.6 14.55C4.45 14.1167 5.40833 13.75 6.475 13.45C7.54167 13.15 8.71667 13 10 13H10.35C10.45 13 10.55 13.0167 10.65 13.05C10.5167 13.35 10.4042 13.6625 10.3125 13.9875C10.2208 14.3125 10.15 14.65 10.1 15H10C8.81667 15 7.75417 15.15 6.8125 15.45C5.87083 15.75 5.1 16.05 4.5 16.35C4.35 16.4333 4.22917 16.55 4.1375 16.7C4.04583 16.85 4 17.0167 4 17.2V18H10.3C10.4 18.35 10.5333 18.6958 10.7 19.0375C10.8667 19.3792 11.05 19.7 11.25 20H4C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18ZM15.85 20.2L15.7 19.5C15.5 19.4167 15.3125 19.3292 15.1375 19.2375C14.9625 19.1458 14.7833 19.0333 14.6 18.9L13.875 19.125C13.6583 19.1917 13.4458 19.1833 13.2375 19.1C13.0292 19.0167 12.8667 18.8833 12.75 18.7L12.55 18.35C12.4333 18.15 12.3917 17.9333 12.425 17.7C12.4583 17.4667 12.5667 17.275 12.75 17.125L13.3 16.65C13.2667 16.4167 13.25 16.2 13.25 16C13.25 15.8 13.2667 15.5833 13.3 15.35L12.75 14.875C12.5667 14.725 12.4583 14.5375 12.425 14.3125C12.3917 14.0875 12.4333 13.875 12.55 13.675L12.775 13.3C12.8917 13.1167 13.05 12.9833 13.25 12.9C13.45 12.8167 13.6583 12.8083 13.875 12.875L14.6 13.1C14.7833 12.9667 14.9625 12.8542 15.1375 12.7625C15.3125 12.6708 15.5 12.5833 15.7 12.5L15.85 11.775C15.9 11.5417 16.0125 11.3542 16.1875 11.2125C16.3625 11.0708 16.5667 11 16.8 11H17.2C17.4333 11 17.6375 11.075 17.8125 11.225C17.9875 11.375 18.1 11.5667 18.15 11.8L18.3 12.5C18.5 12.5833 18.6875 12.675 18.8625 12.775C19.0375 12.875 19.2167 13 19.4 13.15L20.075 12.925C20.3083 12.8417 20.5333 12.8417 20.75 12.925C20.9667 13.0083 21.1333 13.15 21.25 13.35L21.45 13.7C21.5667 13.9 21.6083 14.1167 21.575 14.35C21.5417 14.5833 21.4333 14.775 21.25 14.925L20.7 15.4C20.7333 15.6 20.75 15.8083 20.75 16.025C20.75 16.2417 20.7333 16.45 20.7 16.65L21.25 17.125C21.4333 17.275 21.5417 17.4625 21.575 17.6875C21.6083 17.9125 21.5667 18.125 21.45 18.325L21.225 18.7C21.1083 18.8833 20.95 19.0167 20.75 19.1C20.55 19.1833 20.3417 19.1917 20.125 19.125L19.4 18.9C19.2167 19.0333 19.0375 19.1458 18.8625 19.2375C18.6875 19.3292 18.5 19.4167 18.3 19.5L18.15 20.225C18.1 20.4583 17.9875 20.6458 17.8125 20.7875C17.6375 20.9292 17.4333 21 17.2 21H16.8C16.5667 21 16.3625 20.925 16.1875 20.775C16.0125 20.625 15.9 20.4333 15.85 20.2ZM17 18C17.55 18 18.0208 17.8042 18.4125 17.4125C18.8042 17.0208 19 16.55 19 16C19 15.45 18.8042 14.9792 18.4125 14.5875C18.0208 14.1958 17.55 14 17 14C16.45 14 15.9792 14.1958 15.5875 14.5875C15.1958 14.9792 15 15.45 15 16C15 16.55 15.1958 17.0208 15.5875 17.4125C15.9792 17.8042 16.45 18 17 18ZM10 10C10.55 10 11.0208 9.80417 11.4125 9.4125C11.8042 9.02083 12 8.55 12 8C12 7.45 11.8042 6.97917 11.4125 6.5875C11.0208 6.19583 10.55 6 10 6C9.45 6 8.97917 6.19583 8.5875 6.5875C8.19583 6.97917 8 7.45 8 8C8 8.55 8.19583 9.02083 8.5875 9.4125C8.97917 9.80417 9.45 10 10 10Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <p className="ml-3">User Manager</p>
                </Link>
              </li>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </li>
          <li>
            <Link
              to="/communication-matrix"
              className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                isActiveLink("/communication-matrix")
                  ? "bg-blue-600 text-white hover:text-gray-700"
                  : ""
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_815_1967"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_815_1967)">
                  <path
                    d="M18.95 22C16.8667 22 14.8083 21.5458 12.775 20.6375C10.7417 19.7292 8.89167 18.4417 7.225 16.775C5.55833 15.1083 4.27083 13.2583 3.3625 11.225C2.45417 9.19167 2 7.13333 2 5.05C2 4.75 2.1 4.5 2.3 4.3C2.5 4.1 2.75 4 3.05 4H7.1C7.33333 4 7.54167 4.07917 7.725 4.2375C7.90833 4.39583 8.01667 4.58333 8.05 4.8L8.7 8.3C8.73333 8.56667 8.725 8.79167 8.675 8.975C8.625 9.15833 8.53333 9.31667 8.4 9.45L5.975 11.9C6.30833 12.5167 6.70417 13.1125 7.1625 13.6875C7.62083 14.2625 8.125 14.8167 8.675 15.35C9.19167 15.8667 9.73333 16.3458 10.3 16.7875C10.8667 17.2292 11.4667 17.6333 12.1 18L14.45 15.65C14.6 15.5 14.7958 15.3875 15.0375 15.3125C15.2792 15.2375 15.5167 15.2167 15.75 15.25L19.2 15.95C19.4333 16.0167 19.625 16.1375 19.775 16.3125C19.925 16.4875 20 16.6833 20 16.9V20.95C20 21.25 19.9 21.5 19.7 21.7C19.5 21.9 19.25 22 18.95 22ZM5.025 10L6.675 8.35L6.25 6H4.025C4.10833 6.68333 4.225 7.35833 4.375 8.025C4.525 8.69167 4.74167 9.35 5.025 10ZM13.975 18.95C14.625 19.2333 15.2875 19.4583 15.9625 19.625C16.6375 19.7917 17.3167 19.9 18 19.95V17.75L15.65 17.275L13.975 18.95ZM13 4C12.7167 4 12.4792 3.90417 12.2875 3.7125C12.0958 3.52083 12 3.28333 12 3C12 2.71667 12.0958 2.47917 12.2875 2.2875C12.4792 2.09583 12.7167 2 13 2H21C21.2833 2 21.5208 2.09583 21.7125 2.2875C21.9042 2.47917 22 2.71667 22 3C22 3.28333 21.9042 3.52083 21.7125 3.7125C21.5208 3.90417 21.2833 4 21 4H13ZM13 8C12.7167 8 12.4792 7.90417 12.2875 7.7125C12.0958 7.52083 12 7.28333 12 7C12 6.71667 12.0958 6.47917 12.2875 6.2875C12.4792 6.09583 12.7167 6 13 6H21C21.2833 6 21.5208 6.09583 21.7125 6.2875C21.9042 6.47917 22 6.71667 22 7C22 7.28333 21.9042 7.52083 21.7125 7.7125C21.5208 7.90417 21.2833 8 21 8H13ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H13Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              <span className="ml-3">Communication Matrix</span>
            </Link>
          </li>
          <li>
            <a
              href="/log-status"
              className={`flex items-center p-2 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                isActiveLink("/log-status")
                  ? "bg-blue-600 text-white hover:text-gray-700"
                  : ""
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_815_1972"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_815_1972)">
                  <path
                    d="M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V14C4 13.45 4.19583 12.9792 4.5875 12.5875C4.97917 12.1958 5.45 12 6 12C6.55 12 7.02083 12.1958 7.4125 12.5875C7.80417 12.9792 8 13.45 8 14V18C8 18.55 7.80417 19.0208 7.4125 19.4125C7.02083 19.8042 6.55 20 6 20ZM12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6V18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM18 20C17.45 20 16.9792 19.8042 16.5875 19.4125C16.1958 19.0208 16 18.55 16 18V11C16 10.45 16.1958 9.97917 16.5875 9.5875C16.9792 9.19583 17.45 9 18 9C18.55 9 19.0208 9.19583 19.4125 9.5875C19.8042 9.97917 20 10.45 20 11V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              <span className="ml-3">Log Status</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarLayout;
