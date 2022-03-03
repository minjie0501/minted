import React from 'react'

type Props = {}

export function SearchBar({}: Props) {
  return (
    <div className=" w-3/5 h-10 flex items-center">
    <div className="relative w-full flex-1 justify-center items-center">
      <div className="bg-gray-50  text-gray-400 text-sm font-normal w-full p-2 flex">
        <div className="flex ">
          Catalog
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className="relative w-full">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
        <svg
          className="w-5 h-5 text-gray-300 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="table-search"
        className="bg-gray-50  border-gray-200 border-l outline-none text-gray-900 text-sm block w-full pl-10 p-2"
        placeholder="Search for items"
      />
    </div>
  </div>
  )
}