import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Link } from 'gatsby';

export default function SubMenu({ navItem }) {
  const [isOpen, setOpen] = useState(false);
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.95)' },
  });
  return (
    <div
      onMouseOver={() => setOpen(true)}
      onFocus={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      onBlur={() => setOpen(false)}
      className="relative"
    >
      <div>
        <a
          href={navItem.link}
          className="inline-flex justify-center w-full px-4 py-1 text-sm font-medium leading-5 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 active:bg-gray-100 active:text-gray-800"
        >
          {navItem.text}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="absolute left-0 w-56 pt-2 origin-top-left"
            >
              <div className="shadow-lg">
                <div className="bg-white shadow-xs">
                  <div className="py-1">
                    <ul>
                      {navItem.submenu.map((submenuItem) => (
                        <li key={submenuItem.id}>
                          <Link
                            to={submenuItem.link}
                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          >
                            {submenuItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}

SubMenu.propTypes = {
  navItem: PropTypes.object.isRequired,
};
