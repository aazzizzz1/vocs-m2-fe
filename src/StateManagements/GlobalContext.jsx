import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //State Global
  let navigate = useNavigate();
  const {REACT_APP_API} = process.env;

  //Modal
  const [openModal, setOpenModal] = useState(false);

  //SIGN UP
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [validationUser, setValidationUser] = useState(true);

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleAccept = () => {
    setTermsAccepted(!termsAccepted); // Toggle the value true
  };

  const handleAcceptClick = () => {
    setTermsAccepted(true);
    setOpenModal(false)
  };

  const handleDecelineClick = () => {
    setTermsAccepted(false);
    setOpenModal(false)
  };

  const [inputSignUp, setInputSignUp] = useState({
    full_name: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleInputSignUp = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInputSignUp({ ...inputSignUp, [name]: value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set formSubmitted to true when the form is submitted
    setValidation(true);
    setValidationPass(true);
    setValidationUser(true);

    let { full_name, username, password, confirm_password } = inputSignUp;

    // Validation check: if any of the fields are empty, show an alert
    if (!full_name || !username || !password || !confirm_password) {
      setErrorMessage("All fields are required. Please fill out all fields."); // Set error message
      setSuccessMessage(""); // Clear success message
      return;
    }

    // Validation check: if password is the same as the name, show an alert
    if (password === username) {
      setErrorMessage("Password cannot be the same as your username."); // Set error message
      setSuccessMessage(""); // Clear success message
      setValidation(false);
      return;
    }


    // Validation check: if passwords do not match, show an alert
    if (password !== confirm_password) {
      setErrorMessage("Passwords do not match. Please check your password."); // Set error message
      setSuccessMessage(""); // Clear success message
      setValidationPass(false);
      return;
    }
    
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;

    // Validation check: if password does not meet criteria, show an alert
    if (!password.match(passwordRegex)) {
      setValidation(false);
      return;
    }

    axios
      .post(`${REACT_APP_API}/auth/register`, {
        full_name,
        username,
        password,
        confirm_password,
      })
      .then((res) => {
        let data = res.data;
        console.log(data);
        setSuccessMessage("Registrasi successful!"); // Set success message
        setErrorMessage(""); // Clear error message
        // window.location.href = "/signin";
        navigate(`/signin`)
      })
      .catch((err) => {
        // let error = JSON.stringify(err.response.data, null, 2);
        let error = err.response.data.message;
        console.log(err);
        let errorValidation = JSON.stringify(err.response.data.message);
        const isUserNotRegistered = errorValidation.includes("Username is already exist");
        const isInvalidation = errorValidation.includes("validation error");

        if (isUserNotRegistered) {
          setValidationUser(false);
        } else if (isInvalidation) {
          setValidation(false)
        }
        setErrorMessage(error); // Set error message
        setSuccessMessage(""); // Clear success message
      });
  };

  // Function to parse cookie expires time
const parseCookieExpires = (setCookieHeader) => {
  const expiresMatch = /expires=([^;]+)/.exec(setCookieHeader);
  if (expiresMatch) {
    const expiresValue = expiresMatch[1];
    const expiresTimestamp = new Date(expiresValue).getTime();
    return new Date(expiresTimestamp);
  }
  // Default to 1 day if no valid expires information is found
  const oneDayInMillis = 24 * 60 * 60 * 1000;
  return new Date(Date.now() + oneDayInMillis);
};

  //SIGN IN
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validation, setValidation] = useState(true);
  const [validationPass, setValidationPass] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const [inputLogin, setInputLogin] = useState({
    username: "",
    password: "",
  });

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputLogin = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setValidation(true);
    setValidationPass(true);
  
    let { username, password } = inputLogin;
  
    if (password === username) {
      setErrorMessage("Password cannot be the same as your username.");
      setSuccessMessage("");
      return;
    }
    axios
      .post(`${REACT_APP_API}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        let data = res.data;
      let expiresHeader = res.headers['set-cookie'];
      let tokenExpires = parseCookieExpires(expiresHeader);
      
      Cookies.set(`token`, data.data.accessToken, { expires: tokenExpires });
      Cookies.set(`user`, JSON.stringify(data.user.username), { expires: tokenExpires });
      Cookies.set(`id`, JSON.stringify(data.user.id), { expires: tokenExpires });
      Cookies.set(`full_name`, JSON.stringify(data.user.full_name), { expires: tokenExpires });
      Cookies.set(`role`, JSON.stringify(data.user.role), { expires: tokenExpires });

      console.log(data);
      console.log('Waktu Kadaluwarsa Cookie:', tokenExpires);
      console.log(Cookies.get(`token`));
      console.log(Cookies.get(`user`));
      console.log(Cookies.get(`id`));
      console.log(Cookies.get(`full_name`));
      console.log(Cookies.get(`role`));

      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setShowToast(true);
      navigate(`/`);
      })
      .catch((err) => {
        let error = err.response.data.message;
        console.log(error);
        setErrorMessage(error);
        setSuccessMessage("");
        let errorValidation = JSON.stringify(err.response.data.message);
        const isUserNotRegistered = errorValidation.includes("User not registered, create an account first");
        const isUserPassword = errorValidation.includes("Invalid username or password");

        if (isUserNotRegistered) {
            setValidation(false);
        } else if(isUserPassword) {
            setValidationPass(false);
        }
        setShowToast(true)
      });
  };

  //Membuat Variable untuk semua state dan function
  //Variable Global State
  let state = {
    //SignUp
    termsAccepted,
    setTermsAccepted,
    inputSignUp,
    setInputSignUp,
    formSubmitted,
    setFormSubmitted,
    confirmPasswordVisible,
    setConfirmPasswordVisible,
    validationUser,
    setValidationUser,
    //SIGN IN
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    inputLogin,
    passwordVisible,
    setPasswordVisible,
    validation,
    setValidation,
    validationPass,
    setValidationPass,
    showToast,
    //Modals
    setOpenModal,
    openModal,
  };

  // Variable Global Function
  let handleFunction = {
    //SignUp
    handleAccept,
    handleAcceptClick,
    handleDecelineClick,
    handleInputSignUp,
    handleSignUp,
    handleToggleConfirmPasswordVisibility,
    //SIGN IN
    handleInputLogin,
    handleLogin,
    handleTogglePasswordVisibility,
    //Data Dashboard
    navigate,
  };
  // Membuat Global Context State
  return (
    //Destructuring mengirimkan state dan function yang akan di gunakan komponen lain
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};