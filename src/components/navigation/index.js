import React from 'react';
import { Link } from 'gatsby';
import { IoMdCart } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';

import { useGraphQL } from '../../hooks/use-graphql';
import { useQuantity } from '../../hooks/use-quantity';
import SubMenu from './submenu';

const navItems = [
  {
    id: 0,
    text: 'Apparel',
    link: '/apparel',
    submenu: [
      { id: 0, text: 'All', link: '/all' },
      { id: 1, text: 'Accessories', link: '/apparel/all' },
      { id: 2, text: 'Capris', link: '/apparel/capris' },
      { id: 3, text: 'Dress', link: '/apparel/dress' },
      { id: 4, text: 'Gloves', link: '/apparel/gloves' },
      { id: 5, text: 'Headwear', link: '/apparel/headwear' },
      { id: 6, text: 'Outerwear', link: '/apparel/outerwear' },
      { id: 7, text: 'Pants', link: '/apparel/pants' },
      { id: 8, text: 'Shirts', link: '/apparel/shirts' },
      { id: 9, text: 'Shoes & Socks', link: '/apparel/shoes-and-socks' },
      { id: 10, text: 'Shorts', link: '/apparel/shorts' },
      { id: 11, text: 'Skirts & Skorts', link: '/apparel/skirts-and-skorts' },
    ],
  },
  { id: 1, text: 'Brands', link: '/brands' },
  { id: 2, text: 'Accessories', link: '/accessories' },
  { id: 3, text: 'Sale', link: '/sale' },
  { id: 4, text: 'FAQ', link: '/faq' },
  { id: 5, text: 'Contact', link: '/contact' },
];

const Navigation = () => {
  const [hasItems, quantity] = useQuantity();
  const { site } = useGraphQL();

  return (
    <header className="sticky top-0 z-10 uppercase">
      <div className="py-4 font-semibold text-center text-white bg-brand-pink">
        Free deliver on orders over $100
      </div>
      <div className="bg-white">
        <nav className="flex flex-wrap justify-between max-w-4xl py-4 mx-auto">
          <Link to="/">{site.siteMetadata.title}</Link>
          <Link to="/cart">
            <span className="flex items-center text-sm font-thin tracking-wide">
              <IoMdCart className="text-2xl" />
              <span className="ml-1">
                {quantity === 1 ? `${quantity} item` : `${quantity} items`}
              </span>
            </span>
          </Link>
          <ul className="flex w-full -mx-4">
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                {navItem.submenu ? (
                  <SubMenu navItem={navItem} />
                ) : (
                  <Link
                    to={navItem.link}
                    className="inline-flex justify-center w-full px-4 py-1 text-sm font-medium leading-5 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
                  >
                    {navItem.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
