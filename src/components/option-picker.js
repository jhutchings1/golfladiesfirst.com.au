import PropTypes from 'prop-types';
import React from 'react';

export function OptionPicker({ name, options, handleChange, selected }) {
  return (
    <div>
      <label htmlFor={name.toLowerCase()}>
        <div className="font-bold leading-6">{name}</div>
        <select
          onChange={handleChange}
          value={selected}
          id={name.toLowerCase()}
          className="w-full max-w-xs mt-1 transition duration-150 ease-in-out rounded-none form-select sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-primary focus:border-primary-light"
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

OptionPicker.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.any,
  selected: PropTypes.any,
};
