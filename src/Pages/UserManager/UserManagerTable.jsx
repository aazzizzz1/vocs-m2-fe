import React, { useContext, useEffect } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import { Accordion, Button, Dropdown, Modal } from "flowbite-react";
import PaginationUserManager from "../../Components/Pagination/PaginationUserManager";
import { UserManagerContext } from "../../StateManagements/UserManagerContext";
import CircleCheck from "../../Assets/Svg/UserManager/CircleCheck";
import NeedApproveIcon from "../../Assets/Svg/UserManager/NeedApproveIcon";
import VerticalDropDownIcon from "../../Assets/Svg/UserManager/VerticalDropDownIcon";
import UnApproveIcon from "../../Assets/Svg/UserManager/UnApproveIcon";
import AdminIcon from "../../Assets/Svg/UserManager/AdminIcon";
import SuperAdminIcon from "../../Assets/Svg/UserManager/SuperAdminIcon";
import UserIcon from "../../Assets/Svg/UserManager/UserIcon";
import OperatorIcon from "../../Assets/Svg/UserManager/OperatorIcon";
import SuccessToast from "../../Components/Toast/SuccessToast";
import ErrorToast from "../../Components/Toast/ErrorToast";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import EyeClosedIcon from "../../Assets/Svg/EyeClosedIcon";
import EyeOpenIcon from "../../Assets/Svg/EyeOpenIcon";
import ErrorButton from "../../Components/Button/ErrorButton";
import SuccessToastAuth from "../../Components/Toast/SucessToastAuth";
import ErrorToastAuth from "../../Components/Toast/ErrorToastAuth";
import { Link } from "react-router-dom";

const UserManagerTable = () => {
  const { stateUserManager, handleFunctionUserManager } =
    useContext(UserManagerContext);

  const {
    //Account Setting
    currentPage,
    totalPagesUser,
    limit,
    totalDataUser,
    users,
    inputUserManager,
    successMessage,
    errorMessage,
    inputChangePassword,
    formSubmitted,
    oldPasswordVisible,
    newPasswordVisible,
    confirmPasswordVisible,
    validationUser,
    validation,
    validationPass,
    //Account Setting
    inputChangeAccount,
    fetchStatus,
    anotherId,
    errorMessageUpdate,
    successMessageUpdate,
    errorMessageUpdatePassword,
    successMessageUpdatePassword,
    openModal,
    setOpenModal,
    setOpenModalDelete,
    openModalDelete,
    openModalEditAccount,
    setOpenModalEditAccount,
    openModalEditPassword,
    setOpenModalEditPassword,
    showToast,
    setShowToast,
    setOpenModalCreate,
    openModalCreate,
  } = stateUserManager;

  const {
    handlePageChange,
    handleLimitChange,
    fetchUsers,
    handleCreateDataUserManager,
    // handlePreview,
    handleInputUserManager,
    handleApproveUser,
    handleInputChangePassword,
    handleChangePassword,
    handleToggleOldPasswordVisibility,
    handleToggleNewPasswordVisibility,
    handleToggleConfirmPasswordVisibility,
    //Account Setting
    handleInputChangeAccount,
    handleChangeAccount,
    fetchAnotherUsers,
    handleUnApproveUser,
    handleDelete,
  } = handleFunctionUserManager;

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
      {/* Start block */}
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
                  <span className="text-gray-500">All Users:</span>
                  <span className="dark:text-white font-semibold">
                    {" "}
                    {totalDataUser}
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
            {/* Filter Search Add Dll */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
              <div className="w-full md:w-1/2 flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-start md:space-x-3 flex-shrink-0">
                {/* Filtering Button */}
                <form className="flex items-center basis-3/4">
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
                <Dropdown
                  class="w-full basis-1/4 md:w-auto flex items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-4 w-4 mr-1.5 -ml-1 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Filter
                    </>
                  }
                  dismissOnClick={false}
                >
                  <Dropdown.Item className="p-0 justify-center w-full">
                    <Accordion class="w-full">
                      <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-100">
                          By Username
                        </Accordion.Title>
                        <Accordion.Content className="px-2 py-2 hover:bg-white">
                          <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                            <label className="relative flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                name="shipping"
                                defaultChecked=""
                              />
                              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                A-Z
                              </span>
                            </label>
                            <label className="relative flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                name="shipping"
                              />
                              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Z-A
                              </span>
                            </label>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </Dropdown.Item>
                  <Dropdown.Item className="p-0 w-full justify-center">
                    <Accordion class="w-full">
                      <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-100">
                          By Role
                        </Accordion.Title>
                        <Accordion.Content className="px-2 py-2 hover:bg-white">
                          <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <input
                                  id="apple"
                                  type="checkbox"
                                  defaultValue=""
                                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="apple"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Super Admin
                                </label>
                              </li>
                              <li className="flex items-center">
                                <input
                                  id="microsoft"
                                  type="checkbox"
                                  defaultValue=""
                                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="microsoft"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Admin
                                </label>
                              </li>
                              <li className="flex items-center">
                                <input
                                  id="logitech"
                                  type="checkbox"
                                  defaultValue=""
                                  defaultChecked=""
                                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="logitech"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Operator
                                </label>
                              </li>
                              <li className="flex items-center">
                                <input
                                  id="sony"
                                  type="checkbox"
                                  defaultValue=""
                                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="sony"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Client
                                </label>
                              </li>
                            </ul>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </Dropdown.Item>
                  <Dropdown.Item className="p-0 w-full justify-center">
                    <Accordion class="w-full">
                      <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-100">
                          By Status
                        </Accordion.Title>
                        <Accordion.Content className="px-2 py-2 hover:bg-white">
                          <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <input
                                  id="apple"
                                  type="checkbox"
                                  defaultValue=""
                                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="apple"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Approve
                                </label>
                              </li>
                              <li className="flex items-center">
                                <input
                                  id="microsoft"
                                  type="checkbox"
                                  defaultValue=""
                                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="microsoft"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                  Need Approve
                                </label>
                              </li>
                            </ul>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div className="w-full md:w-auto">
                <Button
                  class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-0 py-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => setOpenModalCreate(true)}
                >
                  <svg
                    className="h-3.5 w-3.5 mr-1.5 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add New User
                </Button>
              </div>
            </div>
            {/* Table  */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      {/* <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div> */}
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SIP Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
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
                          {items?.user_role?.role === "ADMIN" && <AdminIcon />}
                          {items?.user_role?.role === "USER" && <UserIcon />}
                          {items?.user_role?.role === "OPERATOR" && (
                            <OperatorIcon />
                          )}
                          {items?.user_role?.role}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        {/* dropdown approve */}
                        <Dropdown
                          class={`${
                            items?.is_verified
                              ? "bg-green-100 rounded-lg text-green-900"
                              : "bg-yellow-100 rounded-lg text-yellow-900"
                          }`}
                          placement="right"
                          label={
                            <>
                              {items?.is_verified ? (
                                <CircleCheck />
                              ) : (
                                <NeedApproveIcon />
                              )}
                              <span className="font-medium ">
                                {items?.is_verified
                                  ? "Approve"
                                  : "Need Approve"}
                              </span>
                            </>
                          }
                        >
                          <div className="rounded-lg">
                            <p className="ml-4">Change Status to:</p>
                            {items?.is_verified ? (
                              <Dropdown.Item
                                onClick={() => handleUnApproveUser(items?.id)}
                              >
                                <span className="flex bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                  <UnApproveIcon />
                                  Un Approve
                                </span>
                              </Dropdown.Item>
                            ) : (
                              <Dropdown.Item
                                onClick={() => handleApproveUser(items?.id)}
                              >
                                <span className="flex bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                  <CircleCheck />
                                  Approve
                                </span>
                              </Dropdown.Item>
                            )}
                          </div>
                        </Dropdown>
                      </td>
                      <td className="px-6 py-4">
                        <Dropdown
                          label=""
                          placement="left"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <VerticalDropDownIcon />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex justify-start items-start hover:bg-gray-100 w-full">
                              <Button
                                class="w-full"
                                // onClick={() => { setOpenModal(true); handleAnotherFunction(); }}
                                onClick={() => {
                                  setOpenModal(true);
                                  fetchAnotherUsers(items?.id);
                                }}
                              >
                                Edit User
                              </Button>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                fetchAnotherUsers(items?.id);
                              }}
                            >
                              <Link to={`/user-manager/detail-activity`}>
                                View Detail Activity
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item class="flex justify-start items-start hover:bg-gray-100 w-full">
                              <Button
                                class="w-full"
                                onClick={() => {
                                  setOpenModalDelete(true);
                                  fetchAnotherUsers(items?.id);
                                }}
                              >
                                Delete
                              </Button>
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
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
      
      {/* Create Modal End block */}
      <Modal
        size={"3xl"}
        dismissible
        show={openModalCreate}
        onClose={() => setOpenModalCreate(false)}
      >
        {errorMessageUpdate && (
          <ErrorToastAuth message={errorMessageUpdate} className="mb-4" />
        )}
        <Modal.Header>Add New User</Modal.Header>
        <Modal.Body>
          {/* Modal body */}
          <form action="#" onSubmit={handleCreateDataUserManager}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  onChange={handleInputUserManager}
                  value={inputUserManager.username}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  onChange={handleInputUserManager}
                  value={inputUserManager.full_name}
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type fullname"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role
                </label>
                <select
                  onChange={handleInputUserManager}
                  value={inputUserManager.role}
                  name="role"
                  id="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Select role</option>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="SUPERADMIN">SUPER ADMIN</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  SIP Number
                </label>
                <input
                  onChange={handleInputUserManager}
                  value={inputUserManager.sip_number}
                  disabled
                  type="text"
                  name="sip_number"
                  id="price"
                  className="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="$2999"
                  required="required"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div
                  className="flex items-center justify-between relative"
                  data-popover-target="popover-password"
                  data-popover-placement="right"
                >
                  <input
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      formSubmitted &&
                      validation === false &&
                      formSubmitted &&
                      inputUserManager.password &&
                      inputUserManager.password.length < 8 &&
                      !inputUserManager.password.match(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/
                      )
                        ? "border-red-600"
                        : ""
                    }`}
                    value={inputUserManager.password}
                    onChange={handleInputUserManager}
                    type={oldPasswordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                  <span
                    className="absolute inset-y-0 flex items-center right-2 "
                    onClick={handleToggleOldPasswordVisibility}
                  >
                    {oldPasswordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </span>
                </div>
                {formSubmitted && !inputUserManager.password && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                    <span>
                      <ErrorButton />
                    </span>{" "}
                    Password is Required
                  </div>
                )}
                {formSubmitted &&
                  inputUserManager.password &&
                  inputUserManager.password.length < 8 && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span>
                        <ErrorButton />
                      </span>{" "}
                      <span className="ml-2">
                        Password must be at least 8 characters
                      </span>
                    </div>
                  )}
                {formSubmitted &&
                  inputUserManager.password &&
                  inputUserManager.password.length >= 8 &&
                  !inputUserManager.password.match(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/
                  ) && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span>
                        <ErrorButton />
                      </span>{" "}
                      <span className="ml-2">
                        Please choose a stronger password. Try a mix of letters,
                        numbers, and symbols.
                      </span>
                    </div>
                  )}
                {formSubmitted &&
                  inputUserManager.password === inputUserManager.username && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span>
                        <ErrorButton />
                      </span>{" "}
                      <span className="ml-2">
                        Password cannot be the same as username
                      </span>
                    </div>
                  )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <div
                  className="flex items-center justify-between relative"
                  data-popover-target="popover-password"
                  data-popover-placement="right"
                >
                  <input
                    value={inputUserManager.confirm_password}
                    onChange={handleInputUserManager}
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      formSubmitted &&
                      validationPass === false &&
                      formSubmitted &&
                      inputUserManager.password !==
                        inputUserManager.confirm_password
                        ? "border-red-600"
                        : ""
                    }`}
                    required
                  />
                  <span
                    className="absolute inset-y-0 flex items-center right-2 "
                    onClick={handleToggleConfirmPasswordVisibility}
                  >
                    {confirmPasswordVisible ? (
                      <EyeClosedIcon />
                    ) : (
                      <EyeOpenIcon />
                    )}
                  </span>
                </div>
                {formSubmitted &&
                  inputUserManager.password !==
                    inputUserManager.confirm_password && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span>
                        <ErrorButton />
                      </span>{" "}
                      <span className="ml-2">Password Doesn't Match</span>
                    </div>
                  )}
              </div>
              {/* <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Images Url
                </label>
                <textarea
                  onChange={handleInputUserManager}
                  value={inputUserManager.company_image_url}
                  id="description"
                  name="company_image_url"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write product description here"
                  defaultValue={""}
                />
              </div> */}
            </div>
            <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <button
                type="submit"
                className="w-full sm:w-auto justify-center text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add New User
              </button>
              <button
                onClick={() => {
                  setOpenModalCreate(false);
                }}
                type="button"
                className="w-full justify-center sm:w-auto text-gray-500 inline-flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                <svg
                  className="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Discard
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/* Modal Edit */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Body className="p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Fullname
                </label>
                <ul className="my-4 space-y-3">
                  <li>
                    <Button
                      class="w-full text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      // onClick={() => { setOpenModal(true); handleAnotherFunction(); }}
                      onClick={() => {
                        setOpenModalEditAccount(true);
                      }}
                    >
                      <span class="ml-3 justify-start">
                        {inputChangeAccount.full_name}
                      </span>
                      <svg
                        className="ml-auto"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_954_1649"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_954_1649)">
                          <path
                            d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                            fill="#4B5563"
                          />
                        </g>
                      </svg>
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <ul className="my-4 space-y-3">
                  <li>
                    <Button
                      class="w-full text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      // onClick={() => { setOpenModal(true); handleAnotherFunction(); }}
                      onClick={() => {
                        setOpenModalEditAccount(true);
                      }}
                    >
                      <span class="ml-3 justify-start">
                        {inputChangeAccount.username}
                      </span>
                      <svg
                        className="ml-auto"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_954_1649"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_954_1649)">
                          <path
                            d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                            fill="#4B5563"
                          />
                        </g>
                      </svg>
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Role
                </label>
                <ul className="my-4 space-y-3">
                  <li>
                    <Button
                      class="w-full text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      // onClick={() => { setOpenModal(true); handleAnotherFunction(); }}
                      onClick={() => {
                        setOpenModalEditAccount(true);
                      }}
                    >
                      <span class="ml-3 justify-start">
                        {inputChangeAccount.role}
                      </span>
                      <svg
                        className="ml-auto"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_954_1649"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_954_1649)">
                          <path
                            d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                            fill="#4B5563"
                          />
                        </g>
                      </svg>
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <ul className="my-4 space-y-3">
                  <li>
                    <Button
                      class="w-full text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      // onClick={() => { setOpenModal(true); handleAnotherFunction(); }}
                      onClick={() => {
                        setOpenModalEditPassword(true);
                      }}
                    >
                      <span class="ml-3 justify-start">••••••••</span>
                      <svg
                        className="ml-auto"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_954_1649"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_954_1649)">
                          <path
                            d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                            fill="#4B5563"
                          />
                        </g>
                      </svg>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setOpenModal(false)}
          >
            I accept
          </Button>
          <Button
            class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modals Edit Account */}
      <Modal
        show={openModalEditAccount}
        onClose={() => setOpenModalEditAccount(false)}
      >
        {successMessageUpdate && (
          <SuccessToastAuth message={successMessageUpdate} className="mb-4" />
        )}
        {errorMessageUpdate && (
          <ErrorToastAuth message={errorMessageUpdate} className="mb-4" />
        )}
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Body className="p-0">
          {/* Modal body */}
          <div className="p-6 space-y-6">
            {/* Modal body */}
            <form onSubmit={handleChangeAccount(anotherId)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="full_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fullname
                  </label>
                  <input
                    value={inputChangeAccount.full_name}
                    onChange={handleInputChangeAccount}
                    type="text"
                    name="full_name"
                    id="full_name"
                    defaultValue="iPad Air Gen 5th Wi-Fi"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. Apple iMac 27“"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    value={inputChangeAccount.username}
                    onChange={handleInputChangeAccount}
                    type="text"
                    name="username"
                    id="username"
                    defaultValue="Google"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. Apple iMac 27“"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    // disabled //disable input select
                    value={inputChangeAccount.role}
                    onChange={handleInputChangeAccount}
                    name="role"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {/* <option value="">Pilih Peran</option> Opsi default tanpa nilai */}
                    <option selected="">{inputChangeAccount.role}</option>
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="SUPERADMIN">SUPER ADMIN</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update Account
                </button>
                <button
                  type="button"
                  data-modal-hide="changeprofile-modal"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  onClick={() => setOpenModalEditAccount(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modals Edit Password */}
      <Modal
        show={openModalEditPassword}
        onClose={() => setOpenModalEditPassword(false)}
      >
        {successMessageUpdatePassword && (
          <SuccessToastAuth
            message={successMessageUpdatePassword}
            className="mb-4"
          />
        )}
        {errorMessageUpdatePassword && (
          <ErrorToastAuth
            message={errorMessageUpdatePassword}
            className="mb-4"
          />
        )}
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Body className="p-0">
          {/* Modal body */}
          <div className="p-6 space-y-6">
            <form
              onSubmit={handleChangePassword(anotherId)}
              className=" space-y-4 md:space-y-5"
            >
              <div>
                <label
                  htmlFor="old_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Password
                </label>
                <div
                  className="flex items-center justify-between relative"
                  data-popover-target="popover-password"
                  data-popover-placement="right"
                >
                  <span
                    className="absolute inset-y-0 flex items-center right-2 "
                    onClick={handleToggleOldPasswordVisibility}
                  >
                    {oldPasswordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </span>
                  <input
                    value={inputChangePassword.old_password}
                    onChange={handleInputChangePassword}
                    type={oldPasswordVisible ? "text" : "password"}
                    name="old_password"
                    id="old_password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      formSubmitted && validationUser === false
                        ? "border-red-600"
                        : ""
                    }`}
                    required="harus diisi"
                  />
                </div>
                {formSubmitted && !inputChangePassword.old_password && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                    <span>
                      <ErrorButton />
                    </span>{" "}
                    Password is Required
                  </div>
                )}
                {formSubmitted && validationUser === false && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                    <span>
                      <ErrorButton />
                    </span>{" "}
                    Old password is not valid
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="new_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <div
                  className="flex items-center justify-between relative"
                  data-popover-target="popover-password"
                  data-popover-placement="right"
                >
                  <input
                    value={inputChangePassword.new_password}
                    onChange={handleInputChangePassword}
                    type={newPasswordVisible ? "text" : "password"}
                    name="new_password"
                    id="new_password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      formSubmitted &&
                      validation === false &&
                      formSubmitted &&
                      inputChangePassword.new_password &&
                      inputChangePassword.new_password.length < 8 &&
                      !inputChangePassword.new_password.match(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/
                      )
                        ? "border-red-600"
                        : ""
                    }`}
                    required="disi ya"
                  />
                  <span
                    className="absolute inset-y-0 flex items-center right-2 "
                    onClick={handleToggleNewPasswordVisibility}
                  >
                    {newPasswordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </span>
                </div>
              </div>
              {formSubmitted && !inputChangePassword.new_password && (
                <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                  <span>
                    <ErrorButton />
                  </span>{" "}
                  Password is Required
                </div>
              )}
              {formSubmitted &&
                inputChangePassword.new_password &&
                inputChangePassword.new_password.length < 8 && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                    <span>
                      <ErrorButton />
                    </span>{" "}
                    <span className="ml-2">
                      Password must be at least 8 characters
                    </span>
                  </div>
                )}
              {formSubmitted &&
                inputChangePassword.new_password &&
                inputChangePassword.new_password.length >= 8 &&
                !inputChangePassword.new_password.match(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/
                ) && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                    <span>
                      <ErrorButton />
                    </span>{" "}
                    <span className="ml-2">
                      Please choose a stronger password. Try a mix of letters,
                      numbers, and symbols.
                    </span>
                  </div>
                )}
              {formSubmitted &&
                inputChangePassword.new_password ===
                  inputChangePassword.old_username && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                    <span>
                      <ErrorButton />
                    </span>{" "}
                    <span className="ml-2">
                      Password cannot be the same as username
                    </span>
                  </div>
                )}
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <div
                  className="flex items-center justify-between relative"
                  data-popover-target="popover-password"
                  data-popover-placement="right"
                >
                  <input
                    value={inputChangePassword.confirm_password}
                    onChange={handleInputChangePassword}
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      formSubmitted &&
                      validationPass === false &&
                      formSubmitted &&
                      inputChangePassword.new_password !==
                        inputChangePassword.confirm_password
                        ? "border-red-600"
                        : ""
                    }`}
                    required
                  />
                  <span
                    className="absolute inset-y-0 flex items-center right-2 "
                    onClick={handleToggleConfirmPasswordVisibility}
                  >
                    {confirmPasswordVisible ? (
                      <EyeClosedIcon />
                    ) : (
                      <EyeOpenIcon />
                    )}
                  </span>
                </div>
                {formSubmitted &&
                  inputChangePassword.new_password !==
                    inputChangePassword.confirm_password && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span>
                        <ErrorButton />
                      </span>{" "}
                      <span className="ml-2">Password Doesn't Match</span>
                    </div>
                  )}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Change Password
                </button>
                <button
                  type="button"
                  data-modal-hide="changepassword-modal"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  onClick={() => setOpenModalEditPassword(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modals Delete */}
      <Modal
        show={openModalDelete}
        size="md"
        onClose={() => setOpenModalDelete(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleDelete(anotherId)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModalDelete(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserManagerTable;
