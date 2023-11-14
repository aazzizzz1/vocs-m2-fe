import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = (props) => {
  //State Global
  let navigate = useNavigate();
  const { REACT_APP_API } = process.env;
  //Change Password State
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [fetchStatus, setFetchStatus] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [oldPasswordVisible, setoldPasswordVisible] = useState(false);
  const [newPasswordVisible, setnewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [validationUser, setValidationUser] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validation, setValidation] = useState(true);
  const [validationPass, setValidationPass] = useState(true);
  const handleToggleOldPasswordVisibility = () => {
    setoldPasswordVisible(!oldPasswordVisible);
  };
  const handleToggleNewPasswordVisibility = () => {
    setnewPasswordVisible(!newPasswordVisible);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const handleAccept = () => {
    setTermsAccepted(!termsAccepted); // Toggle the value true
  };
  const [showToastUser, setShowToastUser] = useState(false); // Toast State

  //Modal State
  const [openModalEditAccount, setOpenModalEditAccount] = useState(false);
  const [openModalEditPassword, setOpenModalEditPassword] = useState(false);
  const [errorMessageUpdate, setErrorMessageUpdate] = useState("");
  const [successMessageUpdate, setSuccessMessageUpdate] = useState("");
  const [errorMessageUpdatePassword, setErrorMessageUpdatePassword] =
    useState("");
  const [successMessageUpdatePassword, setSuccessMessageUpdatePassword] =
    useState("");

  //Change Password Context
  const [inputChangePassword, setInputChangePassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleInputChangePassword = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInputChangePassword({ ...inputChangePassword, [name]: value });
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set formSubmitted to true when the form is submitted
    setValidation(true);
    setValidationPass(true);
    setValidationUser(true);

    let { old_password, new_password, confirm_password } = inputChangePassword;

    // Validation check: if any of the fields are empty, show an alert
    if (!old_password || !new_password || !confirm_password) {
      setErrorMessage("All fields are required. Please fill out all fields."); // Set error message
      setSuccessMessage(""); // Clear success message
      return;
    }

    // Validation check: if passwords do not match, show an alert
    if (new_password !== confirm_password) {
      setErrorMessage("Passwords do not match. Please check your password."); // Set error message
      setSuccessMessage(""); // Clear success message
      setValidationPass(false);
      return;
    }

    // Regular expression for password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;

    // Validation check: if password does not meet criteria, show an alert
    if (!new_password.match(passwordRegex)) {
      setValidation(false);
      return;
    }

    //Menambahkan Token pada Header
    const token = Cookies.get("token"); // Mengambil token dari Cookies
    // Menambahkan token ke header permintaan
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .put(`${REACT_APP_API}/profile/change-password/`, {
        old_password,
        new_password,
        confirm_password,
      },
      { headers }
      )
      .then((res) => {
        let data = res.data;
        console.log(data);
        setSuccessMessage("Update Password successful!"); // Set success message
        setErrorMessage(""); // Clear error message
        window.location.href = "/account-setting";
        // navigate(`/signin`)
      })
      .catch((err) => {
        let error = err.response.data.message;
        console.log(err);
        let errorValidation = JSON.stringify(err.response.data.message);
        const isOldPasswordWrong = errorValidation.includes(
          "Old password is not valid"
        );
        const isInvalidation = errorValidation.includes("validation error");

        if (isOldPasswordWrong) {
          setValidationUser(false);
        } else if (isInvalidation) {
          setValidation(false);
        }
        setErrorMessageUpdatePassword(error); // Set error message
        setSuccessMessage(""); // Clear success message
        setShowToastUser(true); // Show toast
      });
  };

  //Update Account Context
  const [inputChangeAccount, setInputChangeAccount] = useState({
    full_name: "",
    username: "",
    role: "",
  });

  const handleInputChangeAccount = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInputChangeAccount({ ...inputChangeAccount, [name]: value });
  };

  const handleChangeAccount = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set formSubmitted to true when the form is submitted

    let { full_name, username } = inputChangeAccount;

    //Menambahkan Token pada Header
    const token = Cookies.get("token"); // Mengambil token dari Cookies
    // Menambahkan token ke header permintaan
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .put(`${REACT_APP_API}/profile/update`, {
        full_name,
        username,
      },
      { headers }
      )
      .then((res) => {
        let data = res.data;
        console.log(data);
        setSuccessMessage("Update Account successful!"); // Set success message
        setErrorMessage(""); // Clear error message
        window.location.href = "/account-setting";
        // navigate(`/signin`)
      })
      .catch((err) => {
        let error = err.response.data.message;
        console.log(err);
        let errorValidation = JSON.stringify(err.response.data.message);
        const isOldPasswordWrong = errorValidation.includes(
          "Old password is not valid"
        );
        const isInvalidation = errorValidation.includes("validation error");

        if (isOldPasswordWrong) {
          setValidationUser(false);
        } else if (isInvalidation) {
          setValidation(false);
        }
        setErrorMessage(error); // Set error message
        setSuccessMessage(""); // Clear success message
        setShowToastUser(true); // Show toast
      });
  };

  //Get data User
  const fetchUsers = ()=>{
    //Menambahkan Token pada Header
    const token = Cookies.get("token"); // Mengambil token dari Cookies
    // Menambahkan token ke header permintaan
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
    .get(
      `${REACT_APP_API}/profile`,
      { headers }
    )
      .then((res) => {
        let reslutedit = res.data.data;
        console.log(reslutedit)
        //Menampilkan Data Kedalam Form
        setInputChangeAccount({
          full_name: reslutedit.full_name,
          username: reslutedit.username,
          role: reslutedit.user_role?.role
        });
        setFetchStatus(false);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message)
        console.log(err)
        setShowToastUser(true); // Show toast
      });
  }

  //Menampilkan Data Kedalam Form
  let handleEdit = (e) => {
    e.preventDefault();
    //Menambahkan Token pada Header
    const token = Cookies.get("token"); // Mengambil token dari Cookies
    // Menambahkan token ke header permintaan
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
    .get(
      `${REACT_APP_API}/profile`,
      { headers }
    )
      .then((res) => {
        let reslutedit = res.data.data;
        console.log(reslutedit)
        setInputChangeAccount({
          full_name: reslutedit.full_name,
          username: reslutedit.username,
        });
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message)
        console.log(err)
        setShowToastUser(true); // Show toast
      });
  };

  //Variable Global State
  let stateUser = {
    //ChangePassword
    termsAccepted,
    setTermsAccepted,
    inputChangePassword,
    setInputChangePassword,
    formSubmitted,
    setFormSubmitted,
    confirmPasswordVisible,
    setConfirmPasswordVisible,
    validationUser,
    setValidationUser,
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    passwordVisible,
    setPasswordVisible,
    validation,
    setValidation,
    validationPass,
    setValidationPass,
    oldPasswordVisible,
    setoldPasswordVisible,
    newPasswordVisible,
    setnewPasswordVisible,
    //Account Setting
    inputChangeAccount,
    setInputChangeAccount,
    REACT_APP_API,
    fetchStatus,
    showToastUser,
    setShowToastUser,
    openModalEditAccount,
    setOpenModalEditAccount,
    openModalEditPassword,
    setOpenModalEditPassword,
    errorMessageUpdate,
    setErrorMessageUpdate,
    successMessageUpdate,
    setSuccessMessageUpdate,
    errorMessageUpdatePassword,
    setErrorMessageUpdatePassword,
    successMessageUpdatePassword,
    setSuccessMessageUpdatePassword,
  };

  // Variable Global Function
  let handleFunctionUser = {
    //ChangePassword
    handleAccept,
    handleInputChangePassword,
    handleChangePassword,
    handleToggleOldPasswordVisibility,
    handleToggleNewPasswordVisibility,
    handleToggleConfirmPasswordVisibility,
    navigate,
    //Account Setting
    handleInputChangeAccount,
    handleChangeAccount,
    handleEdit,
    fetchUsers,
  };
  // Membuat Global Context State
  return (
    //Destructuring mengirimkan state dan function yang akan di gunakan komponen lain
    <UserContext.Provider
      value={{
        stateUser,
        handleFunctionUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
