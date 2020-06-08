import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { useEventListener } from '../../hooks';

export function CheckBox({ isChecked, setIsChecked, notCheckedMessage }) {
  const checkboxRef = useRef();

  const isBrowser = typeof window !== 'undefined';

  function handleKeydown(e) {
    if (checkboxRef.current === e.target && e.keyCode === 32) {
      e.preventDefault();
      setIsChecked(!isChecked);
    }
  }

  useEventListener('keydown', handleKeydown, {
    target: isBrowser ? document : null,
  });

  return (
    <div className="flex-shrink-0">
      <span
        ref={checkboxRef}
        role="checkbox"
        tabIndex="0"
        onClick={() => setIsChecked(!isChecked)}
        onKeyDown={(e) => handleKeydown(e)}
        aria-checked={isChecked}
        className={`${
          isChecked ? 'bg-gray-800' : ''
        } relative flex-shrink-0 inline-block h-6 transition duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none ${
          notCheckedMessage
            ? 'bg-red-200 focus:shadow-outline-red'
            : 'bg-gray-200 focus:shadow-outline-gray'
        }`}
      >
        <span
          aria-hidden="true"
          className={`${
            isChecked ? 'translate-x-5' : 'translate-x-0'
          } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow`}
        />
      </span>
    </div>
  );
}

CheckBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  notCheckedMessage: PropTypes.bool.isRequired,
};
