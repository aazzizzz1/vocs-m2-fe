import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useState } from "react";

export const SystemInformationContext = createContext();

export const SystemInformationProvider = (props) => {
    //Global State 
    const { REACT_APP_API } = process.env;
    //Menambahkan Token pada Header
    const token = Cookies.get("token"); // Mengambil token dari Cookies
    // Menambahkan token ke header permintaan
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  // SystemInformationState
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPagesUser, setTotalPagesUser] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [totalDataUser, setTotalDataUser] = useState(0);
  const [limit, setLimit] = useState(30);
  const [fetchStatus, setfetchStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [openModalUser, setOpenModalUser] = useState(false);
  const [openModalGroup, setOpenModalGroup] = useState(false);

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
        setTotalDataUser(data.total_data)
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message)
      }
    };
    fetchUsers(currentPage);
    setfetchStatus(false);
    console.log(groups);
  };

  let fetchGroups = (page, limit) => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(
          // http://localhost:8000/api/v1/group?skip=0&take=100
            `${REACT_APP_API}/group?page=${page}&limit=${limit}`,
            { headers }
          );
        let data = response.data;
        console.log(data);
        setGroups(data.data);
        setTotalPages(data.total_page);
        setTotalData(data.total_data)
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message)
      }
    };
    fetchGroups(currentPage);
    setfetchStatus(false);
    console.log(groups);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setfetchStatus(true); // Set fetchStatus to true when page changes to fetch new data
  };

  const handleLimitChange = (limitPages) =>{
    setLimit(limitPages);
    setCurrentPage(1)
    setfetchStatus(true)
  }

  //Variable Global State
  let stateSystemInformation = {
    groups,
    users,
    currentPage,
    totalPages,
    fetchStatus,
    limit,
    totalData,
    totalDataUser,
    totalPagesUser,
    errorMessage,
    openModalUser,
    setOpenModalUser,
    openModalGroup,
    setOpenModalGroup,
  };

  // Variable Global Function
  let handleFunctionSystemInformation = {
    fetchGroups,
    handlePageChange,
    handleLimitChange,
    fetchUsers,
  };
  // Membuat Global Context State
  return (
    //Destructuring mengirimkan state dan function yang akan di gunakan komponen lain
    <SystemInformationContext.Provider
      value={{
        stateSystemInformation,
        handleFunctionSystemInformation,
      }}
    >
      {props.children}
    </SystemInformationContext.Provider>
  );
};
