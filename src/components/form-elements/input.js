import PropTypes from 'prop-types';
import React from 'react';

export function Input({
  name,
  label,
  type = 'text',
  isFullWidth,
  value,
  handleChange,
}) {
  return (
    <div className={isFullWidth ? 'sm:col-span-2' : ''}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 shadow-sm">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-input focus:outline-none focus:shadow-outline-primary focus:border-primary-light"
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isFullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.PropTypes.string.isRequired,
};
