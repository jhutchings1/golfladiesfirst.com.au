import PropTypes from 'prop-types';
import React from 'react';

export function SizePicker({
  options,
  colour,
  selected,
  setSize,
  variants,
  handedness,
}) {
  return (
    <div>
      <div className="font-bold leading-6">Size</div>
      <div className="flex mt-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            disabled={
              typeof variants.find((v) => {
                return (
                  v.size === option &&
                  v.colour === colour &&
                  v.handedness === handedness
                );
              }) === 'object'
                ? !variants.find((v) => {
                    return (
                      v.size === option &&
                      v.colour === colour &&
                      v.handedness === handedness
                    );
                  }).availableForSale
                : true
            }
            onClick={() => setSize(option)}
            className={`${
              option === selected
                ? 'border-primary bg-primary text-white'
                : 'border-gray-300 bg-white hover:text-gray-400 active:bg-gray-100 active:text-gray-500'
            } flex items-center justify-center min-w-10 h-10 px-3 ml-4 text-sm font-medium leading-5 transition duration-150 ease-in-out bg-white border focus:outline-none focus:shadow-outline-primary focus:border-primary-light first:ml-0 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

SizePicker.propTypes = {
  setSize: PropTypes.func,
  options: PropTypes.any,
  selected: PropTypes.any,
  variants: PropTypes.array,
  colour: PropTypes.any,
  handedness: PropTypes.any,
};
