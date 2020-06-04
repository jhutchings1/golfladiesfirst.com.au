import React from 'react';
import PropTypes from 'prop-types';

export function Phone({ className }) {
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
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32 104c4.389 0 8-3.612 8-8V80c0-1.92-1.36-3.52-3.24-3.92l-20-4a4.002 4.002 0 0 0-3.6 1.08L67.12 83.24a48.208 48.208 0 0 1-22.36-22.36L54.84 50.8a4.002 4.002 0 0 0 1.08-3.6l-4-20A4.012 4.012 0 0 0 48 24H32c-4.4 0-8 3.6-8 8v8c0 35.109 28.891 64 64 64h8zM74.8 58.8c-.692.519-1.535.8-2.4.8-2.194 0-4-1.806-4-4 0-.865.281-1.708.8-2.4L86.32 36H76c-2.194 0-4-1.806-4-4s1.806-4 4-4h20c2.194 0 4 1.806 4 4v20c0 2.194-1.806 4-4 4s-4-1.806-4-4V41.64l-17.2 17.2v-.04z" />
    </svg>
  );
}

Phone.propTypes = {
  className: PropTypes.string,
};
