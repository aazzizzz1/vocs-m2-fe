import React, { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../StateManagements/UserContext";
import ErrorToast from "../../Components/Toast/ErrorToast";
import { Dropdown } from "flowbite-react";
import SuccessToast from "../../Components/Toast/SuccessToast";
import { Link, useNavigate } from "react-router-dom";
import OnlineStatus from "../../Components/Toast/OnlineStatus";

const ProfileLayout = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    Cookies.remove("token");
    navigate(`/signin`)
  };

  const userId = JSON.parse(Cookies.get("id"));

  const { stateUser, handleFunctionUser } = useContext(UserContext);
  const {
    //Account Setting
    inputChangeAccount,
    fetchStatus,
    errorMessage,
    successMessage,
    showToastUser,
    setShowToastUser,
  } = stateUser;

  const { fetchUsers } = handleFunctionUser;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchUsers(userId);
    }
  }, [userId, fetchUsers, fetchStatus]);

  return (
    <>
      {successMessage && (
          <SuccessToast
            showToast={showToastUser}
            setShowToast={setShowToastUser}
            message={successMessage}
          />
        )}
        {errorMessage && (
          <ErrorToast
            showToast={showToastUser}
            setShowToast={setShowToastUser}
            message={errorMessage}
          />
        )}
        <OnlineStatus/>
      <div className="flex mx-3 text-sm rounded-lg md:mr-0 p-[2px] hover:border-gray-400 hover:border-solid hover:border-2">
        <Dropdown
          label={
            <>
              <div className="flex items-center justify-start space-x-2">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="mb-[6px] font-semibold text-gray-900 text-2xl dark:text-gray-300">
                  {inputChangeAccount.username.substr(0, 2)}
                  </span>
                </div>
                <div className="font-medium dark:text-white">
                  <div className="flex justify-start">{inputChangeAccount.full_name}</div>
                  <div className="text-sm flex justify-start text-gray-500 dark:text-gray-400">
                  {inputChangeAccount.username}
                  </div>
                </div>
              </div>
              {/* <Avatar
                alt="User settings"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                rounded
              />
              <p className="text-gray-900 m-1 font-semibold">
                {inputChangeAccount.username}
              </p> */}
            </>
          }
          arrowIcon={false}
          inline
          placement="bottom-end"
          size="lg"
        >
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">
              {inputChangeAccount.username}
            </span>
          </Dropdown.Header>
          <li>
          <Link
              to="/account-setting"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              Account settings
            </Link>
            {/* <a
              href="/account-setting"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >
              Account settings
            </a> */}
            <div className="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
          </li>
          <button
            onClick={handleLogout}
            className="flex justify-between items-center w-full py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Logout
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Dropdown>
      </div>
    </>
  );
};

export default ProfileLayout;
