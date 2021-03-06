import PropTypes from 'prop-types';
import React from 'react';

import { Select } from './form-elements';

export function ProductControls({
  index,
  setIndex,
  products,
  itemsToShow,
  setItemsToShow,
}) {
  return (
    <div className="flex items-center justify-between w-full px-4 pt-12 mx-auto bg-white border-t border-gray-200 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex justify-between flex-1 sm:hidden">
        <button
          type="button"
          onClick={() => setIndex((prevState) => prevState - 1)}
          disabled={index - 1 < 0}
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-primary focus:border-primary-light active:bg-gray-100 active:text-gray-700 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5 mr-1 -ml-2 text-gray-600 group-hover:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </button>
        <button
          type="button"
          onClick={() => setIndex((prevState) => prevState + 1)}
          disabled={index + 1 >= products.length / itemsToShow}
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-primary focus:border-primary-light active:bg-gray-100 active:text-gray-700 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next{' '}
          <svg
            className="w-5 h-5 ml-1 -mr-2 text-gray-600 group-hover:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <Select
          label="Items to Show"
          options={[8, 12, 24, 48]}
          handleChange={setItemsToShow}
          setIndex={setIndex}
          setItemsToShow={setItemsToShow}
          id="items-to-show"
        />
        <div className="flex items-center ml-auto">
          <span className="relative z-0 inline-flex shadow-sm">
            <button
              type="button"
              onClick={() => setIndex((prevState) => prevState - 1)}
              disabled={index - 1 < 0}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-400 focus:z-10 focus:outline-none focus:shadow-outline-primary focus:border-primary-light active:bg-gray-100 active:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
          <span className="inline-block w-32 text-sm text-center">
            Page {index + 1} of {Math.ceil(products.length / itemsToShow)}
          </span>
          <span className="relative z-0 inline-flex items-center shadow-sm">
            <button
              type="button"
              onClick={() => setIndex((prevState) => prevState + 1)}
              disabled={index + 1 >= products.length / itemsToShow}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-400 focus:z-10 focus:outline-none focus:shadow-outline-primary focus:border-primary-light active:bg-gray-100 active:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
  products: PropTypes.array,
  setIndex: PropTypes.func,
  setItemsToShow: PropTypes.func,
  itemsToShow: PropTypes.number,
};
