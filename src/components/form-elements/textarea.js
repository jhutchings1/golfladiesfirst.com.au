import PropTypes from 'prop-types';
import React from 'react';

export function TextArea({ name, label, rows = 4, value, handleChange }) {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 shadow-sm">
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={handleChange}
          className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-textarea focus:outline-none focus:shadow-outline-pink focus:border-brand-pink"
        />
      </div>
    </div>
  );
}

TextArea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
};
