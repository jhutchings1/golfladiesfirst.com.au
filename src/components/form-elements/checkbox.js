import React, { useState } from 'react';

export function CheckBox() {
  const [isChecked, setChecked] = useState(false);
  const handleKeyDown = (e) => {
    if (e.keyCode === 32) setChecked(!isChecked);
  };
  return (
    <div className="flex-shrink-0">
      <span
        role="checkbox"
        tabIndex="0"
        onClick={() => setChecked(!isChecked)}
        onKeyDown={(e) => handleKeyDown(e)}
        aria-checked={isChecked}
        className={`${
          isChecked ? 'bg-gray-800' : 'bg-gray-200'
        } relative flex-shrink-0 inline-block h-6 transition duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
      >
        <span
          aria-hidden="true"
          className={`${
            isChecked ? 'translate-x-0' : 'translate-x-5'
          } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow`}
        />
      </span>
    </div>
  );
}
