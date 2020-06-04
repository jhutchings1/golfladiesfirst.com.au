import React from 'react';
import PropTypes from 'prop-types';

export function Instagram({ className }) {
  return (
    <svg
      className={className}
      height="1em"
      viewBox="0 0 128 128"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <circle cx={64} cy={64} r="13.3" />
        <path d="M82.3 30.7H45.7c-8.3 0-15 6.7-15 15v36.7c0 8.3 6.7 15 15 15h36.7c8.3 0 15-6.7 15-15V45.7c-.1-8.3-6.8-15-15.1-15zM64 84c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm21.2-36.7c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z" />
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm40 82.3c0 11.9-9.7 21.7-21.7 21.7H45.7c-12 0-21.7-9.7-21.7-21.7V45.7c0-12 9.7-21.7 21.7-21.7h36.7c11.9 0 21.7 9.7 21.7 21.7v36.6z" />
      </g>
    </svg>
  );
}

Instagram.propTypes = {
  className: PropTypes.string,
};
