import React, { useContext, useEffect } from "react";
import { CommunicationMatrixContext } from "../../StateManagements/CommunicationMatrixContext";
import SuccessToast from "../../Components/Toast/SuccessToast";
import ErrorToast from "../../Components/Toast/ErrorToast";
import {
  Accordion,
  Button,
  Dropdown,
  Modal,
  Spinner,
  Tooltip,
} from "flowbite-react";
import SuperAdminIcon from "../../Assets/Svg/UserManager/SuperAdminIcon";
import OperatorIcon from "../../Assets/Svg/UserManager/OperatorIcon";
import AdminIcon from "../../Assets/Svg/UserManager/AdminIcon";
import UserIcon from "../../Assets/Svg/UserManager/UserIcon";
import CircleCheck from "../../Assets/Svg/UserManager/CircleCheck";
import UnApproveIcon from "../../Assets/Svg/UserManager/UnApproveIcon";
import PaginationUserManager from "../../Components/Pagination/PaginationUserManager";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const CommunicationMatrixTable = () => {
  const { stateCommunicationMatrix, handleFunctionCommunicationMatrix } =
    useContext(CommunicationMatrixContext);

  const {
    //Account Setting
    currentPage,
    totalPagesUser,
    limit,
    totalDataUser,
    users,
    // inputCommunicationMatrix,
    successMessage,
    errorMessage,
    // inputChangePassword,
    // formSubmitted,
    // oldPasswordVisible,
    // newPasswordVisible,
    // confirmPasswordVisible,
    // validationUser,
    // validation,
    // validationPass,
    // //Account Setting
    // inputChangeAccount,
    fetchStatus,
    anotherId,
    // errorMessageUpdate,
    // successMessageUpdate,
    // errorMessageUpdatePassword,
    // successMessageUpdatePassword,
    openModal,
    setOpenModal,
    setOpenModalDelete,
    openModalDelete,
    // openModalEditAccount,
    // setOpenModalEditAccount,
    // openModalEditPassword,
    // setOpenModalEditPassword,
    showToast,
    setShowToast,
    // setOpenModalCreate,
    // openModalCreate,
  } = stateCommunicationMatrix;

  const {
    handlePageChange,
    handleLimitChange,
    fetchUsers,
    // handleCreateDataCommunicationMatrix,
    // // handlePreview,
    // handleInputCommunicationMatrix,
    // handleApproveUser,
    // handleInputChangePassword,
    // handleChangePassword,
    // handleToggleOldPasswordVisibility,
    // handleToggleNewPasswordVisibility,
    // handleToggleConfirmPasswordVisibility,
    // //Account Setting
    // handleInputChangeAccount,
    // handleChangeAccount,
    fetchAnotherUsers,
    // handleUnApproveUser,
    handleDelete,
  } = handleFunctionCommunicationMatrix;

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
                </Dropdown>
              </div>
              <div className="w-full md:w-auto">
                <button
                  className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-3 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  onClick={() => {
                    setOpenModalDelete(true);
                    // fetchAnotherUsers(items?.id);
                  }}
                >
                  Reset Data
                </button>
              </div>
            </div>
            {/* Table  */}
            <div className="overflow-x-auto grid gap-x-2 gap-y-2 w-full p-4 grid-cols-1 md:grid-cols-3 border-b-2 border-t-2 border-gray-200">
              {fetchStatus === true && <Spinner />}
              {users.map((items, index) => (
                <button
                  key={items.id}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className={`flex items-center justify-between border-2 border-gray-200 rounded-lg p-4
                    ${
                      items?.user_role?.role === "SUPERADMIN"
                        ? "bg-purple-200 text-purple-900"
                        : ""
                    }
                      ${
                        items?.user_role?.role === "ADMIN"
                          ? "bg-blue-200 text-blue-900"
                          : ""
                      }
                      ${
                        items?.user_role?.role === "USER"
                          ? "bg-gray-200 text-gray-900"
                          : ""
                      }
                      ${
                        items?.user_role?.role === "OPERATOR"
                          ? "bg-green-200 text-green-900"
                          : ""
                      }
                    `}
                >
                  <div className="flex flex-row items-center justify-center">
                    <p>
                      {items?.user_role?.role === "SUPERADMIN" && (
                        <SuperAdminIcon />
                      )}
                      {items?.user_role?.role === "ADMIN" && <AdminIcon />}
                      {items?.user_role?.role === "USER" && <UserIcon />}
                      {items?.user_role?.role === "OPERATOR" && (
                        <OperatorIcon />
                      )}
                    </p>
                    <Tooltip 
                    content={<>
                        {items?.username}
                    </>}
                    className="bg-black"
                    >
                    <p className="text-sm font-medium">{`${items?.username.length > 12 ? `${items?.username.slice(0, 12)}...` : items?.username}`}</p>
                    </Tooltip>
                  </div>
                  <div className="flex justify-center items-center flex-row">
                    <span className="flex flex-col bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                      <span className="text-xs font-normal">TXRX</span>
                      <span className="text-xs font-semibold leading-tight">
                        008
                      </span>
                    </span>
                    <span className="flex flex-col bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      <span className="text-xs font-normal">RX</span>
                      <span className="text-xs font-semibold leading-tight">
                        002
                      </span>
                    </span>
                    <span className="flex flex-col bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                      <span className="text-xs font-normal">Unable</span>
                      <span className="text-xs font-semibold leading-tight">
                        019
                      </span>
                    </span>
                  </div>
                </button>
              ))}
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
      {/* Modals Reset */}
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
              Are you sure you want to reset this?
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
      {/* Modal Communication */}
      <Modal show={openModal} size={"5xl"} onClose={() => setOpenModal(false)}>
        <Modal.Header>Setting Communication</Modal.Header>
        <Modal.Body className="p-0">
          <div className="p-5">
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-row items-center justify-center gap-x-4">
                <p className="text-lg font-semibold">Abdul Aziz</p>
                <div className="flex flex-row items-center justify-center bg-purple-300 p-1 rounded-md">
                  <p>
                    <SuperAdminIcon />
                  </p>
                  <p className="text-sm font-medium">Super Admin</p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-row">
                <span className="flex flex-col bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  <span className="text-xs font-normal">TXRX</span>
                  <span className="text-xs font-semibold leading-tight">
                    008
                  </span>
                </span>
                <span className="flex flex-col bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                  <span className="text-xs font-normal">RX</span>
                  <span className="text-xs font-semibold leading-tight">
                    002
                  </span>
                </span>
                <span className="flex flex-col bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  <span className="text-xs font-normal">Unable</span>
                  <span className="text-xs font-semibold leading-tight">
                    019
                  </span>
                </span>
              </div>
            </div>
            <div className="mb-5 w-full md:w-1/2 flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-start md:space-x-3 flex-shrink-0">
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
              </Dropdown>
            </div>
            {/* Table */}
            <div className="overflow-x-auto grid gap-x-2 gap-y-2 w-full p-4 grid-cols-1 md:grid-cols-3 border-b-2 border-t-2 border-gray-200">
              {fetchStatus === true && <Spinner />}
              {users.map((items, index) => (
                <button
                  key={items.id}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className={`flex items-center justify-between border-2 border-gray-200 rounded-lg p-4
                    ${
                      items?.user_role?.role === "SUPERADMIN"
                        ? "bg-purple-200 text-purple-900"
                        : ""
                    }
                      ${
                        items?.user_role?.role === "ADMIN"
                          ? "bg-blue-200 text-blue-900"
                          : ""
                      }
                      ${
                        items?.user_role?.role === "USER"
                          ? "bg-gray-200 text-gray-900"
                          : ""
                      }
                      ${
                        items?.user_role?.role === "OPERATOR"
                          ? "bg-green-200 text-green-900"
                          : ""
                      }
                    `}
                >
                  <div className="flex flex-row items-center justify-center">
                    <p>
                      {items?.user_role?.role === "SUPERADMIN" && (
                        <SuperAdminIcon />
                      )}
                      {items?.user_role?.role === "ADMIN" && <AdminIcon />}
                      {items?.user_role?.role === "USER" && <UserIcon />}
                      {items?.user_role?.role === "OPERATOR" && (
                        <OperatorIcon />
                      )}
                    </p>
                    <Tooltip content={<>
                        {items?.username}
                    </>}
                    className="bg-black"
                    >
                    <p className="text-sm font-medium">{items?.username}</p>
                    </Tooltip>
                  </div>
                  {/* dropdown approve */}
                  <Dropdown
                    class={`${
                      items?.is_verified
                        ? "bg-green-100 rounded-lg text-green-900"
                        : "bg-yellow-100 rounded-lg text-yellow-900"
                    }`}
                    placement="bottom"
                    label={
                      <span className="font-medium ">
                        {items?.is_verified ? "Approve" : "Need Approve"}
                      </span>
                    }
                  >
                    <div className="rounded-lg">
                      {items?.is_verified ? (
                        <>
                          <Dropdown.Item
                          //   onClick={() => handleUnApproveUser(items?.id)}
                          >
                            <span className="flex bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                              <UnApproveIcon />
                              Unable
                            </span>
                          </Dropdown.Item>
                          <Dropdown.Item
                          //   onClick={() => handleApproveUser(items?.id)}
                          >
                            <span className="flex bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                              <CircleCheck />
                              Enable TXRX
                            </span>
                          </Dropdown.Item>
                        </>
                      ) : (
                        <>
                          <Dropdown.Item
                          //   onClick={() => handleApproveUser(items?.id)}
                          >
                            <span className="flex bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                              <CircleCheck />
                              Enable TXRX
                            </span>
                          </Dropdown.Item>
                          <Dropdown.Item
                          //   onClick={() => handleApproveUser(items?.id)}
                          >
                            <span className="flex bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                              <CircleCheck />
                              Enable RX
                            </span>
                          </Dropdown.Item>
                        </>
                      )}
                    </div>
                  </Dropdown>
                </button>
              ))}
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setOpenModal(false)}
          >
            Save
          </Button>
          <Button
            class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommunicationMatrixTable;
