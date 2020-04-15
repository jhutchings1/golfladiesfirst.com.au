import React from 'react';
import { useGraphQL } from '../hooks';

export default function Footer() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useGraphQL();
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-between w-full mt-8 md:mt-0 md:order-1">
          <p className="text-base leading-6 text-center text-gray-400">
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://golfladiesfirst.com.au"
              className="font-medium text-gray-600 underline transition duration-150 ease-in-out hover:text-gray-500 active:text-gray-800"
            >
              {title}
            </a>
            . All rights reserved.
          </p>
          <p>
            Website by{' '}
            <a
              href="https://golfladiesfirst.com.au"
              className="font-medium text-gray-600 underline transition duration-150 ease-in-out hover:text-gray-500 active:text-gray-800"
            >
              Phiranno Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
