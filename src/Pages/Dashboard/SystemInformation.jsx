import React, { useContext, useEffect } from "react";
import Person from "../../Assets/Svg/Person";
import PlugConnected from "../../Assets/Svg/PlugConnected";
import PlugUnConnected from "../../Assets/Svg/PlugUnConnected";
import Group from "../../Assets/Svg/Group";
import Call from "../../Assets/Svg/Call";
import GroupBlack from "../../Assets/Svg/SystemInformation/GroupBlack";
import PersonBlack from "../../Assets/Svg/SystemInformation/PersonBlack";
import { SystemInformationContext } from "../../StateManagements/SystemInformationContext";
import PaginationGroup from "../../Components/Pagination/PaginationGroup";
import PaginationUser from "../../Components/Pagination/PaginationUser";
import { Modal } from "flowbite-react";

const SystemInformation = () => {
  const { stateSystemInformation, handleFunctionSystemInformation } =
    useContext(SystemInformationContext);
  const {
    //Account Setting
    fetchStatus,
    currentPage,
    totalPages,
    totalPagesUser,
    limit,
    totalData,
    totalDataUser,
    groups,
    users,
    openModalUser,
    setOpenModalUser,
    openModalGroup,
    setOpenModalGroup,
  } = stateSystemInformation;

  const { fetchGroups, handlePageChange, handleLimitChange, fetchUsers } =
    handleFunctionSystemInformation;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchGroups(currentPage, limit);
    }
  }, [fetchGroups, fetchStatus, currentPage, limit]);

  useEffect(() => {
    if (fetchStatus === true) {
      fetchUsers(currentPage, limit);
    }
  }, [fetchUsers, fetchStatus, currentPage, limit]);

  console.log(groups);
  console.log(users);

  return (
    <>
      <div className="grid  gap-4 mb-8 grid-cols-1 md:grid-cols-3">
        <button
          type="button"
          className="flex justify-between h-auto rounded border-[1px] bg-white dark:bg-gray-800"
          onClick={() => {
            setOpenModalUser(true);
            handleLimitChange(30);
          }}
        >
          <div className="flex h-full flex-col w-64 items-center justify-center bg-blue-700 rounded-l">
            <Person />
            <p className="text-base font-medium text-white">Users</p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start">
            <div className="p-4 w-full border-b-[1px]">
              <p className="text-base font-regular text-gray-900">
                Total Users
              </p>
              <p className="text-3xl font-bold leading-tight text-gray-900">
                {totalDataUser}
              </p>
            </div>
            <div className="flex space-x-0 h-full w-full">
              <div className="flex flex-col p-4 w-full">
                <PlugConnected />
                <p className="text-3xl font-bold leading-tight text-green-700">
                  88
                </p>
              </div>
              <div className="flex flex-col p-4 border-l-[1px] w-full">
                <PlugUnConnected />
                <p className="text-3xl font-bold leading-tight text-red-700">
                  48
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          type="button"
          className="flex justify-between h-auto rounded border-[1px] bg-white dark:bg-gray-800"
          onClick={() => {
            setOpenModalGroup(true);
            handleLimitChange(30);
          }}
        >
          <div className="flex h-full flex-col w-64 items-center justify-center bg-blue-700 rounded-l">
            <Group />
            <p className="text-base font-medium text-white">Groups</p>
          </div>
          <div className="flex flex-col w-full h-full items-start justify-start">
            <div className="p-4 w-full border-b-[1px]">
              <p className="text-base font-regular text-gray-900">
                Total Groups
              </p>
              <p className="text-3xl font-bold leading-tight text-gray-900">
                {totalData}
              </p>
            </div>
            <div className="flex space-x-0 h-full w-full">
              <div className="flex flex-col p-4 w-full">
                <PlugConnected />
                <p className="text-3xl font-bold leading-tight text-green-700">
                  28
                </p>
              </div>
              <div className="flex flex-col p-4 border-l-[1px] w-full">
                <PlugUnConnected />
                <p className="text-3xl font-bold leading-tight text-red-700">
                  10
                </p>
              </div>
            </div>
          </div>
        </button>
        <a
          href="#CallActivitySection"
          className="flex justify-between h-auto rounded border-[1px] bg-white dark:bg-gray-800"
        >
          <div className="flex flex-col w-64 items-center justify-center bg-blue-700 rounded-l">
            <Call />
            <p className="text-base font-medium text-white">Groups</p>
          </div>
          <div className="flex flex-col w-full h-full items-center justify-center">
            <p className="text-base font-regular text-gray-900">
              Total Active Call
            </p>
            <p className="text-3xl font-bold leading-tight text-gray-900">28</p>
          </div>
        </a>
      </div>
      {/* Modal User */}
      <Modal
        size={"5xl"}
        dismissible
        show={openModalUser}
        onClose={() => setOpenModalUser(false)}
      >
        {/* {errorMessageUpdate && (
          <ErrorToastAuth message={errorMessageUpdate} className="mb-4" />
        )} */}
        <Modal.Header>Add New User</Modal.Header>
        <Modal.Body className="p-0 space-y-0 bg-gray-50">
          {/* Modal body */}
          <div className="p-6 space-y-6 bg-gray-50">
            <div className="grid grid-cols-1 items-center border-gray-200 dark:border-gray-700 justify-between pt-0 md:pt-0">
              <div className="grid gap-0 mt-2 grid-cols-1 md:grid-cols-3 w-full">
                <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                  <div className="flex justify-start items-center">
                    <PersonBlack />
                    <div className="flex flex-col ml-5">
                      <p className="text-base text-gray-900">Total Users</p>
                      <p className="leading-none text-3xl font-bold text-gray-900">
                        {totalDataUser}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                  <div className="flex justify-start items-center">
                    <PlugConnected />
                    <div className="flex flex-col ml-5">
                      <p className="text-base text-green-700">
                        Total Active Users
                      </p>
                      <p className="leading-none text-3xl font-bold text-green-700">
                        10
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                  <div className="flex justify-start items-center">
                    <PlugUnConnected />
                    <div className="flex flex-col ml-5">
                      <p className="text-base text-red-700">
                        Total Non-Active Users
                      </p>
                      <p className="leading-none text-3xl font-bold text-red-700">
                        32
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto p-4 rounded bg-white dark:bg-gray-800 border-[1px]">
              <div className="grid grid-rows-10 grid-flow-col gap-2">
                {users.map((items, index) => (
                  <div key={items.id}>
                    {index + 1}. {items.username}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer
        class=""
        >
          {/* Pagination */}
          <PaginationUser
                currentPage={currentPage}
                totalPages={totalPagesUser}
                totalData={totalDataUser}
                onPageChange={handlePageChange}
                limitData={limit}
                onLimitChange={handleLimitChange}
              />
        </Modal.Footer>
      </Modal>
      {/* Modal Group */}
      <Modal
        size={"5xl"}
        dismissible
        show={openModalGroup}
        onClose={() => setOpenModalGroup(false)}
      >
        {/* {errorMessageUpdate && (
          <ErrorToastAuth message={errorMessageUpdate} className="mb-4" />
        )} */}
        <Modal.Header>Add New User</Modal.Header>
        <Modal.Body className="p-0 space-y-0 bg-gray-50">
          {/* Modal body */}
          <div className="p-6 space-y-6 bg-gray-50">
            <div className="grid grid-cols-1 items-center border-gray-200 dark:border-gray-700 justify-between pt-0 md:pt-0">
              <div className="grid gap-0 mt-2 grid-cols-1 md:grid-cols-3 w-full">
                <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                  <div className="flex justify-start items-center">
                    <GroupBlack />
                    <div className="flex flex-col ml-5">
                      <p className="text-base text-gray-900">Total Group</p>
                      <p className="leading-none text-3xl font-bold text-gray-900">
                        {totalData}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                  <div className="flex justify-start items-center">
                    <PlugConnected />
                    <div className="flex flex-col ml-5">
                      <p className="text-base text-green-700">
                        Total Active Group
                      </p>
                      <p className="leading-none text-3xl font-bold text-green-700">
                        10
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                  <div className="flex justify-start items-center">
                    <PlugUnConnected />
                    <div className="flex flex-col ml-5">
                      <p className="text-base text-red-700">
                        Total Non-Active Group
                      </p>
                      <p className="leading-none text-3xl font-bold text-red-700">
                        32
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto p-4 rounded bg-white dark:bg-gray-800 border-[1px]">
              <div className="grid grid-rows-10 grid-flow-col gap-2">
                {groups.map((item, index) => (
                  <div key={item.id}>
                    {index + 1}. {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer
        class=""
        >
          {/* Pagination */}
          <PaginationGroup
                currentPage={currentPage}
                totalPages={totalPages}
                totalData={totalData}
                onPageChange={handlePageChange}
                limitData={limit}
                onLimitChange={handleLimitChange}
              />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SystemInformation;
