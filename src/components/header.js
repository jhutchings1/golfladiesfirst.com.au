import React, { useState } from 'react';
import { IoMdCart, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'gatsby';

import { useGraphQL, useCartCount } from '../hooks';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';

const Header = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useGraphQL();
  const count = useCartCount();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky z-10 bg-white border-b border-gray-50 top-8">
      <div className="w-full px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
              className="mr-2 md:hidden focus:outline-none focus:shadow-outline-pink"
            >
              <div className="sr-only">Menu</div>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
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
          <div className="flex flex-col items-end">
            <Link
              to="/cart"
              className="flex items-center focus:outline-none focus:shadow-outline-pink"
            >
              <IoMdCart className="text-xl" />
              <span className="ml-1 text-sm leading-5 tracking-wide uppercase">
                {count} items
              </span>
            </Link>
            <nav className="hidden mt-2 -mr-2 font-bold uppercase md:block">
              <Link
                to="/"
                className="inline-flex items-center px-2 focus:outline-none focus:shadow-outline-pink"
              >
                Apparel <IoIosArrowDown className="ml-1 text-sm" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-2 focus:outline-none focus:shadow-outline-pink"
              >
                Brands
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-2 focus:outline-none focus:shadow-outline-pink"
              >
                Accessories
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-2 focus:outline-none focus:shadow-outline-pink"
              >
                Sale
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-2 focus:outline-none focus:shadow-outline-pink"
              >
                FAQ
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-2 focus:outline-none focus:shadow-outline-pink"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export { Header };
