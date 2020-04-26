import PropTypes from 'prop-types';
import React from 'react';

export function Select({ label, id, options, handleChange }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="mt-1 rounded-md shadow-sm">
        <select
          onChange={(e) => handleChange(Number(e.target.value))}
          defaultValue={label}
          id={id}
          className="block w-full transition duration-150 ease-in-out rounded-none form-select sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-pink focus:border-pink-300"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {label}: {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};
