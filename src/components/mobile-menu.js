import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { IoIosArrowDown } from 'react-icons/io';
import { animated, useTransition } from 'react-spring';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import { Logo } from './logo';

export function MobileMenu({ isModalOpen, setIsModalOpen }) {
  const {
    site: {
      siteMetadata: { title, facebook, instagram },
    },
  } = useGraphQL();

  const transitions = useTransition(isModalOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedDialogOverlay
          key={key}
          onDismiss={() => setIsModalOpen(false)}
          className="fixed inset-0 z-40 flex bg-transparent-black-75"
        >
          <AnimatedDialogContent
            aria-label="Sidebar menu"
            style={{ transform: props.transform }}
            className="relative flex flex-col flex-1 w-full max-w-xs bg-white border-transparent border-pink-300 focus:outline-none focus:shadow-outline-pink focus:border-pink-300"
          >
            <div className="absolute top-0 right-0 p-1 -mr-14">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close sidebar menu"
                className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
              >
                <svg
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link
                  to="/"
                  className="focus:outline-none focus:shadow-outline-pink"
                >
                  <h1>
                    <span className="sr-only">{title}</span>
                    <Logo className="h-24 text-brand-pink" />
                  </h1>
                </Link>
              </div>
              <nav className="px-2 mt-5">
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-900 uppercase transition duration-150 ease-in-out bg-gray-100 rounded-md group focus:outline-none focus:bg-gray-200"
                >
                  Apparel <IoIosArrowDown className="ml-1 text-sm" />
                </Link>
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 uppercase transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  Brands
                </Link>
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 uppercase transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  Accessories
                </Link>
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 uppercase transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  Sale
                </Link>
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 uppercase transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  FAQ
                </Link>
                <Link
                  to="/"
                  className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 uppercase transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex justify-between flex-shrink-0 p-4 border-t border-gray-200">
              <div className="text-gray-500">
                &copy; {title} {new Date().getFullYear()}
              </div>
              <div className="flex justify-center">
                <a
                  href={facebook}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none focus:shadow-outline-pink focus:border-pink-300"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={instagram}
                  className="ml-6 text-gray-400 hover:text-gray-500 focus:outline-none focus:shadow-outline-pink focus:border-pink-300"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedDialogContent>
          <div className="flex-shrink-0 w-14" />
        </AnimatedDialogOverlay>
      )
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
