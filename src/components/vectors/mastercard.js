import PropTypes from 'prop-types';
import React from 'react';

export function Mastercard({ className }) {
  return (
    <svg aria-label="Mastercard" className={className} viewBox="0 0 38 24">
      <path
        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
        opacity={0.07}
      />
      <path
        fill="#fff"
        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
      />
      <circle cx={15} cy={12} r={7} fill="#eb001b" />
      <circle cx={23} cy={12} r={7} fill="#f79e1b" />
      <path
        fill="#ff5f00"
        d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
      />
    </svg>
  );
}

Mastercard.propTypes = {
  className: PropTypes.string,
};
