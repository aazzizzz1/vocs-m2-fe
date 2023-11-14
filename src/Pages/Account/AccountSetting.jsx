import React, { useContext, useEffect } from "react";
import { UserContext } from "../../StateManagements/UserContext";
import EyeClosedIcon from "../../Assets/Svg/EyeClosedIcon";
import EyeOpenIcon from "../../Assets/Svg/EyeOpenIcon";
import ErrorButton from "../../Components/Button/ErrorButton";
import Cookies from "js-cookie";
import { Button, Modal } from "flowbite-react";
import ErrorToastAuth from "../../Components/Toast/ErrorToastAuth";
import SuccessToast from "../../Components/Toast/SuccessToast";

const AccountSetting = () => {
  const userId = JSON.parse(Cookies.get("id"));

  const { stateUser, handleFunctionUser } = useContext(UserContext);
  const {
    successMessage,
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
    openModalEditAccount,
    setOpenModalEditAccount,
    openModalEditPassword,
    setOpenModalEditPassword,
    errorMessageUpdate,
    errorMessageUpdatePassword,
    showToastUser,
    setShowToastUser,
  } = stateUser;

  const {
    handleInputChangePassword,
    handleChangePassword,
    handleToggleOldPasswordVisibility,
    handleToggleNewPasswordVisibility,
    handleToggleConfirmPasswordVisibility,
    //Account Setting
    handleInputChangeAccount,
    handleChangeAccount,
    fetchUsers,
  } = handleFunctionUser;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchUsers(userId);
    }
  }, [userId, fetchUsers, fetchStatus]);

  return (
    <>
      <div className="p-4">
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          Account Setting
        </p>
        <p className="text-xl text-gray-600 dark:text-white">
          Update your account and passowrd
        </p>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {successMessage && (
                  <SuccessToast
                    showToast={showToastUser}
                    setShowToast={setShowToastUser}
                    message={successMessage}
                  />
                )}
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Account Setting
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Fullname
                    </label>
                    <ul className="my-4 space-y-3">
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
            </div>
          </div>
        </section>
      </div>
      {/* Change Account Modal */}
      {/* Modals Edit Account */}
      <Modal
        show={openModalEditAccount}
        onClose={() => setOpenModalEditAccount(false)}
      >
        {errorMessageUpdate && (
          <ErrorToastAuth message={errorMessageUpdate} className="mb-4" />
        )}
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Body className="p-0">
          {/* Modal body */}
          <div className="p-6 space-y-6">
            {/* Modal body */}
            <form onSubmit={handleChangeAccount}>
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
                    disabled //disable input select
                    className="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected="">{inputChangeAccount.role}</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Super Admin">Super Admin</option>
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
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Change Password Modal */}
      {/* Modals Edit Password */}
      <Modal
        show={openModalEditPassword}
        onClose={() => setOpenModalEditPassword(false)}
      >
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
              onSubmit={handleChangePassword}
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
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
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AccountSetting;
