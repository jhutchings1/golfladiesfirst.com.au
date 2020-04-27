import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export function Alert({ message, dismiss }) {
  useEffect(() => {
    setTimeout(() => {
      dismiss();
    }, 2000);
  }, [dismiss]);

  return (
    <div className="absolute top-0 right-0 p-4 mt-4 mr-4 shadow sm:mr-6 lg:mr-8 bg-white-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="flex items-center text-sm font-medium leading-5 text-primary">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="ml-1">{message}</span>
          </p>
        </div>
        <div className="pl-3 ml-auto">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={dismiss}
              type="button"
              className="inline-flex rounded-md p-1.5 text-primary hover:bg-primary-light focus:outline-none focus:bg-primary-light transition ease-in-out duration-150"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  dismiss: PropTypes.func,
  message: PropTypes.string,
};
