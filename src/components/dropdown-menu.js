import PropTypes from 'prop-types';
import React, { useState } from 'react';

export function DropdownMenu({ label, options, setItemsToIncrement }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="shadow-sm">
          <button
            type="button"
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          >
            {label}
            <svg
              className="w-5 h-5 ml-2 -mr-1 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {/* <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute z-10 left-0 w-56 mt-2 origin-top-left border border-gray-100 rounded-md shadow-lg`}
      >
        <div className="bg-white rounded-md shadow-xs">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setItemsToIncrement(option);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

DropdownMenu.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  setItemsToIncrement: PropTypes.func.isRequired,
};
