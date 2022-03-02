import React from "react";

type Props = {};

export function NavDropdown({}: Props) {
  return (
    <div className="dropdown relative">
      <button
        className="
            dropdown-toggle
            border
            bg-gray-50
            px-6
            py-[11px]
            text-gray-700
            font-medium
            text-xs
            leading-tight
            uppercase
            hover:bg-gray-300 hover:shadow-lg
            active:bg-gray-400 active:shadow-lg active:text-white
            transition
            duration-150
            ease-in-out
            flex
            items-center
            whitespace-nowrap
          "
        type="button"
        id="dropdownMenuButton9"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Light
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
      </button>
      <ul
        className="
            dropdown-menu
            min-w-max
            absolute
            hidden
            bg-white
            text-base
            z-50
            float-left
            py-2
            list-none
            text-left
            rounded-lg
            shadow-lg
            mt-1
            m-0
            bg-clip-padding
            border-none
          "
        aria-labelledby="dropdownMenuButton9"
      >
        <li>
          <a
            className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
            href="#"
          >
            Action
          </a>
        </li>
        <li>
          <a
            className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
            href="#"
          >
            Another action
          </a>
        </li>
        <li>
          <a
            className="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
                hover:bg-gray-100
              "
            href="#"
          >
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
