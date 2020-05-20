import PropTypes from 'prop-types';
import React from 'react';

export function SizePicker({ available, options, selected, setSize }) {
  return (
    <div>
      <div className="font-bold leading-6">Size</div>
      <div className="flex mt-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            disabled={available}
            onClick={() => setSize(option)}
            className={`${
              option === selected
                ? 'border-primary bg-primary text-white'
                : 'border-gray-300 bg-white'
            } w-10 h-10 ml-4 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border hover:text-gray-400 focus:outline-none focus:shadow-outline-primary focus:border-primary-light active:bg-gray-100 active:text-gray-500 first:ml-0 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

SizePicker.propTypes = {
  available: PropTypes.bool,
  setSize: PropTypes.func,
  options: PropTypes.any,
  selected: PropTypes.any,
};
