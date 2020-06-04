import React from 'react';
import PropTypes from 'prop-types';

export function Email({ className }) {
  return (
    <svg
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      height="1em"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 128 128"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32 96.05c4.389 0 8-3.611 8-8V50.53L65.8 69.61a4.003 4.003 0 0 1-3.6 0L24 50.53v37.52c0 4.389 3.611 8 8 8h64zm0-64H32c-4.4 0-8 3.6-8 8v1.52l40 20 40-20v-1.52c0-4.389-3.611-8-8-8z" />
    </svg>
  );
}

Email.propTypes = {
  className: PropTypes.string,
};
