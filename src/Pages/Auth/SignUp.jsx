import React, { useContext } from "react";
import { GlobalContext } from "../../StateManagements/GlobalContext";
import EyeClosedIcon from "../../Assets/Svg/EyeClosedIcon";
import EyeOpenIcon from "../../Assets/Svg/EyeOpenIcon";
import LogoLen from "../../Assets/Images/LogoLen.png";
import ErrorButton from "../../Components/Button/ErrorButton";
import SuccessToastAuth from "../../Components/Toast/SucessToastAuth";
import ErrorToastAuth from "../../Components/Toast/ErrorToastAuth";

const SignUp = () => {
  //Memanggil state dari GlobalContext dan dari destructuring dibawah ini
  const { state, handleFunction } = useContext(GlobalContext);

  //Membuat destructuring dari Global Context
  const {
    termsAccepted,
    successMessage,
    errorMessage,
    inputSignUp,
    formSubmitted,
    passwordVisible,
    confirmPasswordVisible,
    validation,
    validationPass,
    validationUser,
  } = state;

  const {
    handleAccept,
    handleAcceptClick,
    handleDecelineClick,
    handleInputSignUp,
    handleSignUp,
    handleTogglePasswordVisibility,
    handleToggleConfirmPasswordVisibility,
  } = handleFunction;

  return (
    <>
    <div className="bg-gray-50 dark:bg-gray-900 md:p-20">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
            <img
              className="w-40 h-30"
              src={LogoLen}
              alt="Logo-Len"
              border="0"
            />
        </div>
        {successMessage && <SuccessToastAuth message={successMessage} />}
        {errorMessage && <ErrorToastAuth message={errorMessage} />}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 h-full">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  value={inputSignUp.full_name}
                  onChange={handleInputSignUp}
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Abdul Aziz"
                  required
                />
                {formSubmitted && !inputSignUp.full_name && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span> Name is Required
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  value={inputSignUp.username}
                  onChange={handleInputSignUp}
                  type="text"
                  name="username"
                  id="username"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    formSubmitted && validationUser === false ? "border-red-600" : ""
                  }`}
                  placeholder="PT Len Industri"
                  required
                />
                {formSubmitted && !inputSignUp.username && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span> Images is
                    Required
                  </p>
                )}
                {formSubmitted && !validationUser === true && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                    <span><ErrorButton/></span> <span className="ml-2">Username is already exist!!</span>
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
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
                      formSubmitted && validation === false && formSubmitted &&
                      inputSignUp.password &&
                      inputSignUp.password.length < 8 &&
                      !inputSignUp.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/) ? "border-red-600" : ""
                    }`}
                    value={inputSignUp.password}
                    onChange={handleInputSignUp}
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                  <span
                    className="absolute inset-y-0 flex items-center right-2 "
                    onClick={handleTogglePasswordVisibility}
                  >
                    {passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </span>
                </div>
                {formSubmitted && !inputSignUp.password && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                  <span><ErrorButton/></span> Password is Required
                  </div>
                )}
                {formSubmitted &&
                  inputSignUp.password &&
                  inputSignUp.password.length < 8 && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span><ErrorButton/></span> <span className="ml-2">Password must be at least 8 characters</span> 
                    </div>
                  )}
                {formSubmitted &&
                  inputSignUp.password &&
                  inputSignUp.password.length >= 8 &&
                  !inputSignUp.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/) && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span><ErrorButton/></span> <span className="ml-2">Please choose a stronger password. Try a mix of letters, numbers, and symbols.</span>
                    </div>
                  )}
                {formSubmitted && inputSignUp.password === inputSignUp.username && (
                  <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span><ErrorButton/></span> <span className="ml-2">Password cannot be the same as username</span>
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
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
                    value={inputSignUp.confirm_password}
                    onChange={handleInputSignUp}
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      formSubmitted && validationPass === false && formSubmitted &&
                      inputSignUp.password !== inputSignUp.confirm_password ? "border-red-600" : ""
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
                  inputSignUp.password !== inputSignUp.confirm_password && (
                    <div className="flex items-center mt-2 text-sm text-red-600 dark:text-red-500">
                      <span><ErrorButton/></span> <span className="ml-2">Password Doesn't Match</span>
                    </div>
                  )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                    checked={termsAccepted}
                    onChange={handleAccept} // Toggle when the checkbox is clicked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                      {/* Modal toggle */}
                      <button
                        onClick={handleAccept}
                        data-modal-target="staticModal"
                        data-modal-toggle="staticModal"
                        type="button"
                      >
                        User Agreement & Privacy Policy
                      </button>
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
      {/* Main Terms and Conditions Modal */}
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Static modal
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
              >
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
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="staticModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleAcceptClick}
              >
                I accepte
              </button>
              <button
                data-modal-hide="staticModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={handleDecelineClick}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popover */}
      <div
        data-popover=""
        id="popover-password"
        role="tooltip"
        className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
      >
        <div className="p-3 space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Follow these instructions to secure your password:
          </h3>
          {/* <div className="grid grid-cols-4 gap-2">
            <div className="h-1 bg-orange-300 dark:bg-orange-400" />
            <div className="h-1 bg-orange-300 dark:bg-orange-400" />
            <div className="h-1 bg-gray-200 dark:bg-gray-600" />
            <div className="h-1 bg-gray-200 dark:bg-gray-600" />
          </div> */}
          {/* <p>It’s better to have:</p> */}
          <ul>
          <li className="flex items-center mb-1">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have at least 8 characters
            </li>
            <li className="flex items-center mb-1">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have at least 1 number
            </li>
            <li className="flex items-center mb-1">
            <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have at least 1 symbol (#$&amp;)
            </li>
            <li className="flex items-center mb-1">
              <svg
                className="w-3.5 h-3.5 mr-2 text-green-400 dark:text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Must have upper &amp; lower case letters
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 mr-2.5 text-red-600 dark:text-red-800"
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
              Password cannot be the same as username
            </li>
          </ul>
        </div>
        <div data-popper-arrow="" />
      </div>
    </>
  );
};

export default SignUp;
