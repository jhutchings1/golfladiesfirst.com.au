import PropTypes from 'prop-types';
import React from 'react';

export function AfterPay({ className }) {
  return (
    <svg aria-label="Afterpay" className={className} viewBox="0 0 38 24">
      <path
        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
        opacity={0.07}
      />
      <path
        fill="#fff"
        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
      />
      <path
        fill="#2778b3"
        d="M19.454 10.923l2.408-1.394c-.265-.467-.2-.355-.443-.795-.257-.468-.16-.651.37-.655a374.522 374.522 0 014.636-.004c.46.003.57.2.34.604a402.422 402.422 0 01-2.317 4.019c-.249.426-.467.425-.727.008-.267-.429-.196-.323-.482-.808l-2.4 1.394c.046.123.107.203.156.289.595 1.035.86 1.529 1.475 2.552.728 1.212 2.254 1.285 3.121.165a3.534 3.534 0 00.264-.393c1.458-2.526 2.917-5.052 4.366-7.583a3.02 3.02 0 00.344-.821 1.817 1.817 0 00-1.78-2.223c-3.124-.017-6.25-.02-9.375.008a1.837 1.837 0 00-1.653 2.69c.203.408.448.796.677 1.19.43.744.545.94 1.02 1.757"
      />
      <path
        fill="#074578"
        d="M12.506 18.727l.004-2.773s-.384-.004-.904-.004c-.528 0-.637-.187-.376-.644a373.02 373.02 0 012.306-3.979c.23-.393.435-.427.687.01.767 1.328 1.536 2.655 2.293 3.99.242.425.133.612-.355.627h-.934v2.78h3.251c1.403-.02 2.226-1.293 1.696-2.595a3.481 3.481 0 00-.205-.422c-1.441-2.51-2.881-5.02-4.33-7.524a2.998 2.998 0 00-.534-.704 1.803 1.803 0 00-2.793.419 661.694 661.694 0 00-4.664 8.048 1.822 1.822 0 001.484 2.759c.452.028 2.379.012 3.374.012"
      />
    </svg>
  );
}

AfterPay.propTypes = {
  className: PropTypes.string,
};
