import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useState } from "react";

export const UserManagerContext = createContext();

export const UserManagerProvider = (props) => {
  //Global State
  const { REACT_APP_API } = process.env;
  //Menambahkan Token pada Header
  const token = Cookies.get("token"); // Mengambil token dari Cookies
  // Menambahkan token ke header permintaan
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // UserManagerState
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesUser, setTotalPagesUser] = useState(1);
  const [totalDataUser, setTotalDataUser] = useState(0);
  const [limit, setLimit] = useState(30);
  const [fetchStatus, setfetchStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessageUpdate, setErrorMessageUpdate] = useState("");
  const [successMessageUpdate, setSuccessMessageUpdate] = useState("");
  const [errorMessageUpdatePassword, setErrorMessageUpdatePassword] =
    useState("");
  const [successMessageUpdatePassword, setSuccessMessageUpdatePassword] =
    useState("");
  const [anotherId, setAnotherId] = useState("");

  // MODALS
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEditAccount, setOpenModalEditAccount] = useState(false);
  const [openModalEditPassword, setOpenModalEditPassword] = useState(false);
  const [showToast, setShowToast] = useState(false); // Toast State

  //Change Password State
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission status
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [oldPasswordVisible, setoldPasswordVisible] = useState(false);
  const [newPasswordVisible, setnewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [validationUser, setValidationUser] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
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

  let fetchUsers = (page, limit) => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_API}/user?page=${page}&limit=${limit}`,
          { headers }
        );
        let data = response.data;
        console.log(data);
        setUsers(data.data);
        setTotalPagesUser(data.total_page);
        setTotalDataUser(data.total_data);
        // setUserRole(data.data.map((item) => item.user_role?.role));
      } catch (error) {
        console.log(error);
        setErrorMessage("Gagal Mengambil Data User"); // Set error message
        setSuccessMessage(""); // Clear success message
      }
    };
    fetchUsers(currentPage);
    setfetchStatus(false);
  };

  console.log(users);

  // Create Data Function
  const [inputUserManager, setInputUserManager] = useState({
    username: "",
    full_name: "",
    password: "",
    confirm_password: "",
    role: "",
    // sip_number: 0,
  });

  const handleCreateDataUserManager = (events) => {
    events.preventDefault();
    setFormSubmitted(true); // Set formSubmitted to true when the form is submitted

    const {
      username,
      full_name,
      password,
      confirm_password,
      role,
      // sip_number: 0,
    } = inputUserManager;

    axios
      .post(
        `${REACT_APP_API}/user`,
        {
          username,
          full_name,
          password,
          confirm_password,
          role,
          // sip_number: 0,
        },
        { headers }
      ) // Menambahkan headers ke permintaan
      .then((result) => {
        console.log(result);
        setfetchStatus(true);
        setSuccessMessage("Successfull add User!"); // Set success message
        setErrorMessageUpdate(""); // Clear error message
        setOpenModalCreate(false);
        setShowToast(true);
        // Reset input to default values
        setInputUserManager({
          username: "",
          full_name: "",
          password: "",
          confirm_password: "",
          role: "",
          // sip_number: 0,
        });
      })
      .catch((error) => {
        setErrorMessageUpdate(error.response.data.message); // Set error message
        setSuccessMessage(""); // Clear success message
        let errorValidation = JSON.stringify(error.response.data.message);
        const isOldPasswordWrong = errorValidation.includes(
          "Old password is not valid"
        );
        const isInvalidation = errorValidation.includes("validation error");

        if (isOldPasswordWrong) {
          setValidationUser(false);
        } else if (isInvalidation) {
          setValidation(false);
        }
      });

    // Reset input to default values
    // setInputUserManager({
    //   username: "",
    //   full_name: "",
    //   password: "",
    //   confirm_password: "",
    //   role: "",
    //   // sip_number: 0,
    // });
  };

  const handleInputUserManager = (events) => {
    let value = events.target.value;
    let name = events.target.name;
    // console.log(`${name}, ${score}, ${course}, ${value}`)

    if (name === "username") {
      setInputUserManager({ ...inputUserManager, username: value });
    } else if (name === "full_name") {
      setInputUserManager({ ...inputUserManager, full_name: value });
    } else if (name === "password") {
      setInputUserManager({ ...inputUserManager, password: value });
    } else if (name === "confirm_password") {
      setInputUserManager({ ...inputUserManager, confirm_password: value });
    } else if (name === "role") {
      setInputUserManager({ ...inputUserManager, role: value });
    }
    // else if (name === "sip_number") {
    //   setInputUserManager({ ...inputUserManager, sip_number: value });
    // }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setfetchStatus(true); // Set fetchStatus to true when page changes to fetch new data
  };

  const handleLimitChange = (limitPages) => {
    setLimit(limitPages);
    setCurrentPage(1);
    setfetchStatus(true);
  };

  const handleApproveUser = (Id) => {
    axios
      .put(`${REACT_APP_API}/auth/verify?userid=${Id}`, {}, { headers })
      .then((res) => {
        console.log(res);
        setfetchStatus(true);
        setSuccessMessage("Update Status successful!"); // Set success message
        setErrorMessage(""); // Clear error message
        setShowToast(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(
          `Gagal Update Status User: ${err.response.data.message}`
        ); // Set error message
        setSuccessMessage(""); // Clear success message
        setShowToast(true);
      });
  };

  const handleUnApproveUser = (Id) => {
    axios
      .put(`${REACT_APP_API}/auth/unverify?userid=${Id}`, {}, { headers })
      .then((res) => {
        console.log(res);
        setfetchStatus(true);
        setSuccessMessage("Update Status successful!"); // Set success message
        setErrorMessage(""); // Clear error message
        setShowToast(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(
          `Gagal Update Status User: ${err.response.data.message}`
        ); // Set error message
        setSuccessMessage(""); // Clear success message
        setShowToast(true);
      });
  };

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

  const handleChangePassword = (userId) => (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set formSubmitted to true when the form is submitted
    setValidation(true);
    setValidationPass(true);
    setValidationUser(true);

    let { old_password, new_password, confirm_password } = inputChangePassword;

    // Validation check: if any of the fields are empty, show an alert
    if (!old_password || !new_password || !confirm_password) {
      return;
    }

    // Validation check: if passwords do not match, show an alert
    if (new_password !== confirm_password) {
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
      .put(
        `${REACT_APP_API}/user/change-password/${userId}`,
        {
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
        setErrorMessageUpdatePassword(""); // Clear error message
        setOpenModalEditPassword(false);
        setShowToast(true);
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
        setSuccessMessageUpdatePassword(""); // Clear success message
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

  const handleChangeAccount = (userId) => (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set formSubmitted to true when the form is submitted

    let { full_name, username, role } = inputChangeAccount;

    //Menambahkan Token pada Header
    const token = Cookies.get("token"); // Mengambil token dari Cookies
    // Menambahkan token ke header permintaan
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .put(
        `${REACT_APP_API}/user/update/${userId}`,
        {
          full_name,
          username,
          role,
        },
        { headers }
      )
      .then((res) => {
        let data = res.data;
        console.log(data);
        setSuccessMessage("Update Account successful!"); // Set success message
        setErrorMessageUpdate(""); // Clear error message
        // window.location.href = "/account-setting";
        // navigate(`/signin`)
        setfetchStatus(true);
        setOpenModalEditAccount(false);
        setShowToast(true);
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
        setErrorMessageUpdate(error); // Set error message
        setSuccessMessageUpdate(""); // Clear success message
      });
  };

  //Get data User
  const fetchAnotherUsers = (userId) => {
    //Menambahkan Token pada Header
    const token = Cookies.get("token"); // Mengambil token dari Cookies
    // Menambahkan token ke header permintaan
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${REACT_APP_API}/user/${userId}`, { headers })
      .then((res) => {
        let reslutedit = res.data.data;
        console.log(reslutedit);
        //Menampilkan Data Kedalam Form
        setInputChangeAccount({
          full_name: reslutedit.full_name,
          username: reslutedit.username,
          role: reslutedit.user_role?.role,
        });
        setfetchStatus(false);
        setAnotherId(reslutedit.id);
      })
      .catch((err) => {
        // setErrorMessage(err.message)
        console.log(err);
      });
  };

  //Delete Data by ID
  let handleDelete = (userId) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(`${REACT_APP_API}/user/${userId}`, { headers })
      .then((result) => {
        console.log(result);
        setOpenModalDelete(false);
        setSuccessMessage("Delete User successful!"); // Set success message
        setErrorMessage(""); // Clear error message
        setfetchStatus(true);
        setShowToast(true);
        setOpenModalDelete(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(`Gagal Delete User: ${error.response.data.message}`); // Set error message
        setSuccessMessage(""); // Clear success message
        setShowToast(true);
        setOpenModalDelete(false);
      });
  };

  //Variable Global State
  let stateUserManager = {
    users,
    currentPage,
    fetchStatus,
    limit,
    totalDataUser,
    totalPagesUser,
    inputUserManager,
    errorMessage,
    successMessage,
    oldPasswordVisible,
    newPasswordVisible,
    confirmPasswordVisible,
    validationUser,
    passwordVisible,
    validation,
    validationPass,
    inputChangePassword,
    inputChangeAccount,
    formSubmitted,
    anotherId,
    errorMessageUpdate,
    successMessageUpdate,
    errorMessageUpdatePassword,
    successMessageUpdatePassword,
    openModalCreate,
    openModal,
    openModalDelete,
    openModalEditAccount,
    openModalEditPassword,
    showToast,
    setOpenModalCreate,
    setOpenModal,
    setOpenModalDelete,
    setOpenModalEditAccount,
    setOpenModalEditPassword,
    setShowToast,
  };

  // Variable Global Function
  let handleFunctionUserManager = {
    handlePageChange,
    handleLimitChange,
    handleCreateDataUserManager,
    fetchUsers,
    handleInputUserManager,
    handleApproveUser,
    handleInputChangePassword,
    handleChangePassword,
    handleInputChangeAccount,
    handleChangeAccount,
    handleToggleOldPasswordVisibility,
    handleToggleNewPasswordVisibility,
    handleToggleConfirmPasswordVisibility,
    fetchAnotherUsers,
    handleAccept,
    setPasswordVisible,
    handleUnApproveUser,
    handleDelete,
  };
  // Membuat Global Context State
  return (
    //Destructuring mengirimkan state dan function yang akan di gunakan komponen lain
    <UserManagerContext.Provider
      value={{
        stateUserManager,
        handleFunctionUserManager,
      }}
    >
      {props.children}
    </UserManagerContext.Provider>
  );
};
