import React, { useContext, useEffect } from "react";
import PersonAdd from "../../Assets/Svg/PersonAdd";
import Setting from "../../Assets/Svg/Setting";
import VolumeMute from "../../Assets/Svg/CallActivity/VolumeMute";
import Speak from "../../Assets/Svg/CallActivity/Speak";
import Pause from "../../Assets/Svg/CallActivity/Pause";
import MicOff from "../../Assets/Svg/CallActivity/MicOff";
import { Accordion, Button, Dropdown, Modal } from "flowbite-react";
import { CallActivityContext } from "../../StateManagements/CallActivityContext";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import HorizontalDropDown from "../../Assets/Svg/CallActivity/HorizontalDropDown";

const CallActivity = () => {
  const { stateCallActivity, handleFunctionCallActivity } =
    useContext(CallActivityContext);

  const {
    //Account Setting
    currentPage,
    limit,
    fetchStatus,
    anotherId,
    openModalAddUser,
    setOpenModalAddUser,
    openModalDelete,
    setOpenModalDelete,
    openModalRename,
    setOpenModalRename,
    openModalCreateChannel,
    setOpenModalCreateChannel,
    openModalManageChannel,
    setOpenModalManageChannel,
  } = stateCallActivity;

  const {
    fetchUsers,
    fetchAnotherUsers,
    handleDelete,
  } = handleFunctionCallActivity;

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
      <div className="flex items-center justify-center h-auto mb-4 rounded bg-white dark:bg-gray-800 border-[1px]">
        <div className="flex flex-col w-full h-full items-start justify-start">
          <div className="flex justify-between w-full h-auto border-b-[1px]">
            <p className="text-lg font-semibold text-gray-900 p-4">Live Call</p>
            <div className="p-2">
              <div className="grid gap-0 grid-cols-1 md:grid-cols-2 rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={() => {
                    setOpenModalManageChannel(true);
                    // fetchAnotherUsers(items?.id);
                  }}
                  className="px-4 py-2 justify-center text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-l-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white focus:outline-none text-center inline-flex items-center "
                >
                  <svg
                    className="w-[16px] h-[16px] mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <g
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z" />
                      <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </g>
                  </svg>
                  Manage Channel
                </button>
                <a href="/">
                  <button
                    type="button"
                    className="px-4 w-full py-2 justify-center text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white focus:outline-none text-center inline-flex items-center "
                  >
                    View All
                    <svg
                      className="w-[16px] h-[16px] ml-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                        d="m7 9 4-4-4-4M1 9l4-4-4-4"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="grid gap-x-8 gap-y-4 w-full p-6 grid-cols-1 md:grid-cols-2"
            id="accordion-open"
            data-accordion="open"
            data-active-classes="dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <div>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="justify-normal focus:ring-2 bg-blue-200 hover:bg-blue-300">
                    <div className="flex justify-between">
                      <div>Channel 1</div>
                      <div className="flex flex-row ml-24 mr-2 md:ml-[270px]">
                        <button
                          onClick={() => setOpenModalAddUser(true)}
                          className="mr-2"
                        >
                          <PersonAdd />
                        </button>
                        <Dropdown
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <span>
                              <Setting />
                            </span>
                          )}
                        >
                          <Dropdown.Item>
                            <li>
                              <button
                                onClick={() => setOpenModalRename(true)}
                                className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                type="button"
                              >
                                Rename
                              </button>
                            </li>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <li>
                              <button
                                onClick={() => {
                                  setOpenModalDelete(true);
                                  // fetchAnotherUsers(items?.id);
                                }}
                                className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                type="button"
                              >
                                Delete
                              </button>
                            </li>
                          </Dropdown.Item>
                        </Dropdown>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <VolumeMute />
                          <span className="mr-2 text-gray-900">Room AL 2</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Speak />
                          <span className="mr-2 text-blue-700">Room AU 1</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Pause />
                          <span className="mr-2 text-yellow-500">
                            Room AD 3
                          </span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Speak />
                          <span className="mr-2 text-blue-700">Room AL 1</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <MicOff />
                          <span className="mr-2 text-gray-900">Room AD 3</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <div>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="justify-normal focus:ring-2 bg-blue-200 hover:bg-blue-300">
                    <div className="flex justify-between">
                      <div>Channel 1</div>
                      <div className="flex flex-row ml-24 mr-2 md:ml-[270px]">
                        <button
                          onClick={() => setOpenModalAddUser(true)}
                          className="mr-2"
                        >
                          <PersonAdd />
                        </button>
                        <Dropdown
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <span>
                              <Setting />
                            </span>
                          )}
                        >
                          <Dropdown.Item>
                            <li>
                              <button
                                onClick={() => setOpenModalRename(true)}
                                className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                type="button"
                              >
                                Rename
                              </button>
                            </li>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <li>
                              <button
                                onClick={() => {
                                  setOpenModalDelete(true);
                                  // fetchAnotherUsers(items?.id);
                                }}
                                className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                type="button"
                              >
                                Delete
                              </button>
                            </li>
                          </Dropdown.Item>
                        </Dropdown>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <VolumeMute />
                          <span className="mr-2 text-gray-900">Room AL 2</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Speak />
                          <span className="mr-2 text-blue-700">Room AU 1</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Pause />
                          <span className="mr-2 text-yellow-500">
                            Room AD 3
                          </span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Speak />
                          <span className="mr-2 text-blue-700">Room AL 1</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <MicOff />
                          <span className="mr-2 text-gray-900">Room AD 3</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
                        <div>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="justify-normal focus:ring-2 bg-blue-200 hover:bg-blue-300">
                    <div className="flex justify-between">
                      <div>Channel 1</div>
                      <div className="flex flex-row ml-24 mr-2 md:ml-[270px]">
                        <button
                          onClick={() => setOpenModalAddUser(true)}
                          className="mr-2"
                        >
                          <PersonAdd />
                        </button>
                        <Dropdown
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <span>
                              <Setting />
                            </span>
                          )}
                        >
                          <Dropdown.Item>
                            <li>
                              <button
                                onClick={() => setOpenModalRename(true)}
                                className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                type="button"
                              >
                                Rename
                              </button>
                            </li>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <li>
                              <button
                                onClick={() => {
                                  setOpenModalDelete(true);
                                  // fetchAnotherUsers(items?.id);
                                }}
                                className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                type="button"
                              >
                                Delete
                              </button>
                            </li>
                          </Dropdown.Item>
                        </Dropdown>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <VolumeMute />
                          <span className="mr-2 text-gray-900">Room AL 2</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Speak />
                          <span className="mr-2 text-blue-700">Room AU 1</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Pause />
                          <span className="mr-2 text-yellow-500">
                            Room AD 3
                          </span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <Speak />
                          <span className="mr-2 text-blue-700">Room AL 1</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                      <li className="flex justify-between">
                        <div className="flex flex-row">
                          <MicOff />
                          <span className="mr-2 text-gray-900">Room AD 3</span>
                        </div>
                        <Dropdown
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          label=""
                          placement="right"
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <button>
                              {" "}
                              <HorizontalDropDown />
                            </button>
                          )}
                        >
                          <div className="rounded-lg font-medium ">
                            <Dropdown.Item class="flex flex-row w-full justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <Dropdown
                                label=""
                                placement="right"
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <div className="flex flex-row w-full justify-between">
                                    <p>Transfer to</p>
                                    <svg
                                      className="w-2.5 h-2.5 ml-2.5 mt-[6px]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 6 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                      />
                                    </svg>
                                  </div>
                                )}
                              >
                                <Dropdown.Item>Channel 1</Dropdown.Item>
                                <Dropdown.Item>Channel 2</Dropdown.Item>
                                <Dropdown.Item>Channel 3</Dropdown.Item>
                                <Dropdown.Item>Channel 4</Dropdown.Item>
                                <Dropdown.Item>Channel 5</Dropdown.Item>
                                <Dropdown.Item>Channel 6</Dropdown.Item>
                              </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-sm text-gray-900"
                              onClick={() => {
                                // fetchAnotherUsers(items?.id);
                              }}
                            >
                              Hold
                            </Dropdown.Item>
                          </div>
                        </Dropdown>
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <div>
              <h2 id="accordion-open-heading-1">
                <div className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 border border-b-0 border-gray-200 rounded-t-xl focus:ring-2 bg-blue-200 focus:ring-blue-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-200 dark:hover:bg-gray-800">
                  <button
                    type="Button"
                    className="flex items-center"
                    data-accordion-target="#accordion-open-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-open-body-1"
                  >
                    <svg
                      data-accordion-icon=""
                      className="w-3 h-3 rotate-180 shrink-0 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                    Channel 1
                  </button>
                  <div className="flex flex-row">
                    <button
                      data-modal-target="adduser-modal"
                      data-modal-toggle="adduser-modal"
                      type="button"
                    >
                      <PersonAdd />
                    </button>
                    <button
                      id="dropdownRightButton"
                      data-dropdown-toggle="dropdownRight"
                      data-dropdown-placement="right"
                      className="ml-2"
                      type="button"
                    >
                      <Setting />
                    </button>
                  </div>
                </div>
              </h2>
              <div
                id="accordion-open-body-1"
                className="hidden"
                aria-labelledby="accordion-open-heading-1"
              >
                <div className="p-5 border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li className="flex justify-between">
                      <div className="flex flex-row">
                        <VolumeMute />
                        <span className="mr-2 text-gray-900">Room AL 2</span>
                      </div>
                      <button
                        id="dropdownMenuIconHorizontalButton"
                        data-dropdown-toggle="dropdownDotsHorizontal"
                        data-dropdown-placement="right"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                    </li>
                    <li className="flex justify-between">
                      <div className="flex flex-row">
                        <Speak />
                        <span className="mr-2 text-blue-700">Room AU 1</span>
                      </div>
                      <button
                        id="dropdownMenuIconHorizontalButton"
                        data-dropdown-toggle="dropdownDotsHorizontal"
                        data-dropdown-placement="right"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                    </li>
                    <li className="flex justify-between">
                      <div className="flex flex-row">
                        <Pause />
                        <span className="mr-2 text-yellow-500">Room AD 3</span>
                      </div>
                      <button
                        id="dropdownMenuIconHorizontalButton"
                        data-dropdown-toggle="dropdownDotsHorizontal"
                        data-dropdown-placement="right"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                    </li>
                    <li className="flex justify-between">
                      <div className="flex flex-row">
                        <Speak />
                        <span className="mr-2 text-blue-700">Room AL 1</span>
                      </div>
                      <button
                        id="dropdownMenuIconHorizontalButton"
                        data-dropdown-toggle="dropdownDotsHorizontal"
                        data-dropdown-placement="right"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                    </li>
                    <li className="flex justify-between">
                      <div className="flex flex-row">
                        <MicOff />
                        <span className="mr-2 text-gray-900">Room AD 3</span>
                      </div>
                      <button
                        id="dropdownMenuIconHorizontalButton"
                        data-dropdown-toggle="dropdownDotsHorizontal"
                        data-dropdown-placement="right"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main modal Manage Channel */}
      <Modal
        show={openModalManageChannel}
        size={"xl"}
        onClose={() => setOpenModalManageChannel(false)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Connect with one of our available wallet providers or create a new
            one.
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Channel 1</span>
                <div className="flex flex-row">
                  <button
                    type="button"
                    onClick={() => setOpenModalRename(true)}
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Rename
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenModalDelete(true);
                      // fetchAnotherUsers(items?.id);
                    }}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Channel 1</span>
                <div className="flex flex-row">
                  <button
                    type="button"
                    onClick={() => setOpenModalRename(true)}
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Rename
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenModalDelete(true);
                      // fetchAnotherUsers(items?.id);
                    }}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Channel 1</span>
                <div className="flex flex-row">
                  <button
                    type="button"
                    onClick={() => setOpenModalRename(true)}
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Rename
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenModalDelete(true);
                      // fetchAnotherUsers(items?.id);
                    }}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Channel 1</span>
                <div className="flex flex-row">
                  <button
                    type="button"
                    onClick={() => setOpenModalRename(true)}
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Rename
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenModalDelete(true);
                      // fetchAnotherUsers(items?.id);
                    }}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Channel 1</span>
                <div className="flex flex-row">
                  <button
                    type="button"
                    onClick={() => setOpenModalRename(true)}
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Rename
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenModalDelete(true);
                      // fetchAnotherUsers(items?.id);
                    }}
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={() => setOpenModalCreateChannel(true)}
            className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
            Add product
          </button>
        </Modal.Footer>
      </Modal>
      {/* Create Channel Modal */}
      <Modal
        show={openModalCreateChannel}
        size={"lg"}
        onClose={() => setOpenModalCreateChannel(false)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <form action="#" className="p-4">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue="Cahnnel iPad Air Gen 5th Wi-Fi"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ex. Apple iMac 27“"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                data-modal-hide="createchannel-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
              <button
                data-modal-hide="createchannel-modal"
                type="button"
                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {/* Small Modal Add User */}
      <Modal
        show={openModalAddUser}
        size={"lg"}
        onClose={() => setOpenModalAddUser(false)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Connect with one of our available wallet providers or create a new
            one.
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Abdul Aziz
                </span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Ruben</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Shafa</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">PT Len</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Michael</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Shifa</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Shifa</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Shifa</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center p-1.5 text-sm font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Shifa</span>
                <button
                  type="button"
                  className="text-green-700 h-auto hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Invite
                </button>
              </div>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {/*Dropdown menu */}
      <div
        id="dropdownRight"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownRightButton"
        >
          <li>
            <button
              data-modal-target="renamechannel-modal"
              data-modal-toggle="renamechannel-modal"
              className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              type="button"
            >
              Rename
            </button>
          </li>
          <li>
            <button
              data-modal-target="delete-modal"
              data-modal-toggle="delete-modal"
              className="flex px-4 py-2 w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              type="button"
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
      {/* Rename Modal */}
      <Modal
        show={openModalRename}
        size={"lg"}
        onClose={() => setOpenModalRename(false)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue="Cahnnel iPad Air Gen 5th Wi-Fi"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ex. Apple iMac 27“"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                data-modal-hide="renamechannel-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Rename
              </button>
              <button
                data-modal-hide="renamechannel-modal"
                type="button"
                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {/* Delete Modal */}
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

export default CallActivity;
