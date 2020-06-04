import React from 'react';
import { Link } from 'gatsby';

import { brands } from '../data/brands';

export function BrandsWeLove() {
  return (
    <article className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
        <h2 className="h2">Shop brands we love</h2>
        <div className="grid grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:mt-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.slug}
              className="relative flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out rounded hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100 focus:z-10"
            >
              <span className="sr-only">{brand.label}</span>
              <img
                className="max-h-12"
                src={brand.icon}
                alt={`${brand.label} logo`}
              />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
