import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

export function ProductControls({ index, setIndex, products }) {
  console.log(`Index: ${index}`);
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <Link
          to="/"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
        >
          Previous
        </Link>
        <Link
          to="/"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="ml-auto">
          <span className="relative z-0 inline-flex shadow-sm">
            <button
              type="button"
              onClick={() => setIndex((prevState) => prevState - 9)}
              disabled={index - 9 < 0}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {Array(5)
              .fill('')
              .map((_, i) => {
                console.log(`I: ${i}`);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i * 9)}
                    className={`${
                      index === i * 9
                        ? 'bg-brand-blue text-white hover:text-gray-100'
                        : 'bg-white text-gray-700 hover:text-gray-500'
                    } relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border border-gray-300 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            <button
              type="button"
              onClick={() => setIndex((prevState) => prevState + 9)}
              disabled={index + 9 > products.length + 1}
              className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

ProductControls.propTypes = {
  index: PropTypes.number,
  products: PropTypes.shape({
    length: PropTypes.number,
  }),
  setIndex: PropTypes.func,
};
