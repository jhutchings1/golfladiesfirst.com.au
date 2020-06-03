import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

function Ladies() {
  return (
    <div className="sticky inset-x-0 bottom-0 z-20 hidden w-full mx-auto pointer-events-none max-w-7xl md:justify-end md:flex">
      <div className="flex overflow-hidden pointer-events-auto">
        <a
          href="#top"
          className="w-1/2 bg-brand-pink focus:outline-none focus:shadow-outline-primary group focus:bg-pink-500"
        >
          <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-pink group-focus:bg-pink-500">
            <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12">
              Back to top
            </h3>
          </span>
        </a>
        <Link
          to="/products/mens/"
          className="w-1/2 bg-brand-blue focus:outline-none focus:shadow-outline-primary group focus:bg-blue-900"
        >
          <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-blue group-focus:bg-blue-900">
            <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12">
              Shop Mens
            </h3>
          </span>
        </Link>
      </div>
    </div>
  );
}

function Mens() {
  return (
    <div className="sticky inset-x-0 bottom-0 z-20 hidden w-full mx-auto pointer-events-none max-w-7xl md:justify-end md:flex">
      <div className="flex overflow-hidden pointer-events-auto">
        <Link
          to="/products/ladies/"
          className="w-1/2 bg-brand-pink focus:outline-none focus:shadow-outline-primary group focus:bg-pink-500"
        >
          <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-pink group-focus:bg-pink-500">
            <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12">
              Shop Ladies
            </h3>
          </span>
        </Link>
        <a
          href="#top"
          className="w-1/2 bg-brand-blue focus:outline-none focus:shadow-outline-primary group focus:bg-blue-900"
        >
          <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-blue group-focus:bg-blue-900">
            <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12">
              Back to top
            </h3>
          </span>
        </a>
      </div>
    </div>
  );
}

export function FixedButtons({ theme }) {
  if (theme === 'ladies') return <Ladies />;
  return <Mens />;
}

FixedButtons.propTypes = {
  theme: PropTypes.string,
};
