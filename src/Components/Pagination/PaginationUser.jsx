import { Dropdown } from "flowbite-react";
import React from "react";

const PaginationUser = ({
  currentPage,
  totalPages,
  onPageChange,
  totalData,
  limitData,
  onLimitChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="mr-2">Showing</span>
          <Dropdown
            class="font-semibold text-gray-900 dark:text-white text-center inline-flex items-center rounded-lg border-gray-900 border-2"
            label={<>{limitData}</>}
            placement="right"
            className="w-auto min-width: 16px;"
          >
            <Dropdown.Item
            className="w-24"
            >
              <li>
                <button
                  onClick={() => onLimitChange(10)}
                  className="w-full flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  10
                </button>
              </li>
            </Dropdown.Item>
            <Dropdown.Item className="w-24">
              <li>
                <button
                  onClick={() => onLimitChange(20)}
                  className="w-full flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  20
                </button>
              </li>
            </Dropdown.Item>
            <Dropdown.Item className="w-24">
              <li>
                <button
                  onClick={() => onLimitChange(30)}
                  className="w-full flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  30
                </button>
              </li>
            </Dropdown.Item>
          </Dropdown>
          <span className="font-normal text-gray-900 dark:text-white ml-2">
            of {totalData}
          </span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          {currentPage > 1 && (
            <li>
              <button
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => onPageChange(currentPage - 1)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          )}
          {pageNumbers.map((number) => (
            <button
              className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
                number === currentPage
                  ? "text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              } ${console.log(currentPage)}`}
              key={number}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          ))}
          {currentPage < totalPages && (
            <li>
              <button
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => onPageChange(currentPage + 1)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div className="paginationUserManager"></div>
    </>
  );
};

export default PaginationUser;
