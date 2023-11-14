import React, { useContext, useEffect } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import PaginationUserManager from "../../Components/Pagination/PaginationUserManager";
import { UserManagerContext } from "../../StateManagements/UserManagerContext";
import AdminIcon from "../../Assets/Svg/UserManager/AdminIcon";
import SuperAdminIcon from "../../Assets/Svg/UserManager/SuperAdminIcon";
import UserIcon from "../../Assets/Svg/UserManager/UserIcon";
import OperatorIcon from "../../Assets/Svg/UserManager/OperatorIcon";
import SuccessToast from "../../Components/Toast/SuccessToast";
import ErrorToast from "../../Components/Toast/ErrorToast";
import { Link } from "react-router-dom";

const DetailActivity = () => {
  const { stateUserManager, handleFunctionUserManager } =
    useContext(UserManagerContext);

  const {
    //Account Setting
    currentPage,
    totalPagesUser,
    limit,
    totalDataUser,
    users,
    successMessage,
    errorMessage,
    //Account Setting
    inputChangeAccount,
    fetchStatus,
    // anotherId,
    showToast,
    setShowToast,
  } = stateUserManager;

  const { handlePageChange, handleLimitChange, fetchUsers, fetchAnotherUsers } =
    handleFunctionUserManager;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchUsers(currentPage, limit);
    }
  }, [fetchUsers, fetchStatus, currentPage, limit]);

  useEffect(() => {
    if (fetchStatus === true) {
      fetchAnotherUsers();
    }
  }, [fetchAnotherUsers, fetchUsers, fetchStatus]);

  return (
    <>
      <div className="p-4">
        <nav className="flex mb-2" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/user-manager"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
                {" "} User Manager
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Detail Activity
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Details and Activity Record
        </p>
        {/* Detail Activity Table */}
        <section className="bg-gray-50 dark:bg-gray-900 antialiased">
          {successMessage && (
            <SuccessToast
              showToast={showToast}
              setShowToast={setShowToast}
              message={successMessage}
            />
          )}
          {errorMessage && (
            <ErrorToast
              showToast={showToast}
              setShowToast={setShowToast}
              message={errorMessage}
            />
          )}
          <div className="mx-auto max-w-screen-2xl">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded overflow-auto">
              {/* Setting Table */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="flex-1 flex items-center space-x-2">
                  <h5>
                    <span className="text-gray-500">
                      Details and activity records of :
                    </span>
                    <span className="dark:text-white font-semibold">
                      {" "}
                      {inputChangeAccount.full_name}
                    </span>
                    <span className="dark:text-white font-normal">
                      {" "}
                      ({inputChangeAccount.username})
                    </span>
                  </h5>
                </div>
                <div className="flex-shrink-0 flex flex-col items-start md:flex-row md:items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3">
                  <button
                    type="button"
                    className="flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2 w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                      />
                    </svg>
                    Table settings
                  </button>
                </div>
              </div>
              {/* Filter Dll */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
                <div className="w-full md:w-1/2">
                  <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        placeholder="Search for products"
                        required=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </form>
                </div>
              </div>
              {/* Table  */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4"></th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Device
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchStatus === true && <Spinner />}
                    {users.map((items, index) => (
                      <tr
                        key={items.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">{index + 1}.</div>
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {items?.username}
                        </th>
                        <td className="px-6 py-4">12345580</td>
                        <td className="px-6 py-4">
                          <button
                            className={`flex text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 
                        ${
                          items?.user_role?.role === "SUPERADMIN"
                            ? "bg-purple-100 text-purple-900"
                            : ""
                        }
                        ${
                          items?.user_role?.role === "ADMIN"
                            ? "bg-blue-100 text-blue-900"
                            : ""
                        }
                        ${
                          items?.user_role?.role === "USER"
                            ? "bg-gray-100 text-gray-900"
                            : ""
                        }
                        ${
                          items?.user_role?.role === "OPERATOR"
                            ? "bg-green-100 text-green-900"
                            : ""
                        }
                        `}
                          >
                            {items?.user_role?.role === "SUPERADMIN" && (
                              <SuperAdminIcon />
                            )}
                            {items?.user_role?.role === "ADMIN" && (
                              <AdminIcon />
                            )}
                            {items?.user_role?.role === "USER" && <UserIcon />}
                            {items?.user_role?.role === "OPERATOR" && (
                              <OperatorIcon />
                            )}
                            {items?.user_role?.role}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          {/* dropdown approve */}
                          {items?.user_role?.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <PaginationUserManager
                currentPage={currentPage}
                totalPages={totalPagesUser}
                totalData={totalDataUser}
                onPageChange={handlePageChange}
                limitData={limit}
                onLimitChange={handleLimitChange}
              />
            </div>
          </div>
        </section>
      </div>
      {/* Start block */}
    </>
  );
};

export default DetailActivity;
