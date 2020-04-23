import React from 'react';
import { IoMdCart, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'gatsby';

import { useGraphQL, useCartCount } from '../hooks';
import { Logo } from './logo';

const Header = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useGraphQL();
  const count = useCartCount();

  return (
    <header className="sticky z-10 bg-white border-b border-gray-50 top-8">
      <div className="w-full px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              <span className="sr-only">{title}</span>
              <Logo className="h-24 text-brand-pink" />
            </h1>
          </Link>
          <div className="flex flex-col items-end">
            <Link to="/cart" className="flex items-center">
              <IoMdCart className="text-xl" />
              <span className="ml-1 text-sm leading-5 tracking-wide uppercase">
                {count} items
              </span>
            </Link>
            <nav className="mt-2 font-bold uppercase">
              <Link to="/" className="inline-flex items-center ml-4">
                Apparel <IoIosArrowDown className="ml-1 text-sm" />
              </Link>
              <Link to="/" className="inline-flex items-center ml-4">
                Brands
              </Link>
              <Link to="/" className="inline-flex items-center ml-4">
                Accessories
              </Link>
              <Link to="/" className="inline-flex items-center ml-4">
                Sale
              </Link>
              <Link to="/" className="inline-flex items-center ml-4">
                FAQ
              </Link>
              <Link to="/" className="inline-flex items-center ml-4">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
