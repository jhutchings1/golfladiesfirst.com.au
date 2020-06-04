import React from 'react';
import PropTypes from 'prop-types';

export function Facebook({ className }) {
  return (
    <svg
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      height="1em"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      viewBox="0 0 128 128"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 0c35.323 0 64 28.677 64 64s-28.677 64-64 64S0 99.323 0 64 28.677 0 64 0zm5.117 54.966v-9.828c0-4.058 1.091-6.945 6.91-6.945l8.617.004V24.719A81.037 81.037 0 0 0 74.046 24c-10.704 0-17.788 7.069-17.788 19.069v11.896H43.355v12.889h12.901V104h12.863V67.854h12.808l2.106-12.888H69.117z" />
    </svg>
  );
}

Facebook.propTypes = {
  className: PropTypes.string,
};
