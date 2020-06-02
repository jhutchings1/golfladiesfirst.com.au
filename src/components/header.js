import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button';

import { useGraphQL, useCartCount } from '../hooks';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';
import siteNavigation from '../data/site-navigation.json';

const Header = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useGraphQL();
  const count = useCartCount();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky z-10 bg-white border-b border-gray-50 top-8">
      <div className="w-full px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsModalOpen((prevState) => !prevState)}
              className="mr-2 md:hidden focus:outline-none focus:shadow-outline-primary"
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
              className="focus:outline-none focus:shadow-outline-primary"
            >
              <h1>
                <span className="sr-only">{title}</span>
                <Logo className="h-24 text-primary" />
              </h1>
            </Link>
          </div>
          <div className="flex flex-col items-end">
            <Link
              to="/cart"
              className="flex items-center focus:outline-none focus:shadow-outline-primary"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="ml-1 text-sm leading-5 tracking-wide uppercase">
                {count} items
              </span>
            </Link>
            <nav className="hidden -mx-2 md:flex md:flex-wrap md:justify-end">
              {siteNavigation.map((navItem) =>
                navItem.submenu ? (
                  <Menu key={navItem.id}>
                    <MenuButton className="inline-flex items-center pl-2 pr-1 mt-2 uppercase focus:outline-none focus:shadow-outline-primary">
                      {navItem.label}
                      <span aria-hidden>
                        <svg
                          className="w-5 h-5 -mr-1 text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </MenuButton>
                    <MenuPopover className="z-20 p-0 mt-2 -mx-3 bg-white rounded shadow-lg outline-none">
                      <div className="flex py-1 rounded shadow-xs">
                        <MenuItems className="py-0 border-none">
                          {navItem.submenu.col1.map((submenu) => (
                            <MenuLink
                              key={submenu.id}
                              as={Link}
                              to={submenu.slug}
                              className="px-4 py-1 text-base leading-6 text-gray-700 hover:bg-primary focus:bg-primary"
                            >
                              {submenu.label}
                            </MenuLink>
                          ))}
                        </MenuItems>
                        {navItem.submenu.col2 && (
                          <MenuItems className="py-0 border-none">
                            {navItem.submenu.col2.map((submenu) => (
                              <MenuLink
                                key={submenu.id}
                                as={Link}
                                to={submenu.slug}
                                className="px-4 py-1 text-base leading-6 text-gray-700 hover:bg-primary focus:bg-primary"
                              >
                                {submenu.label}
                              </MenuLink>
                            ))}
                          </MenuItems>
                        )}
                      </div>
                    </MenuPopover>
                  </Menu>
                ) : (
                  <Link
                    key={navItem.id}
                    to={navItem.slug}
                    className="inline-flex items-center px-2 mt-2 uppercase focus:outline-none focus:shadow-outline-primary"
                  >
                    {navItem.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
        <MobileMenu isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </header>
  );
};

export { Header };
