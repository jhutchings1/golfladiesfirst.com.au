import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

export function LadiesHero() {
  const { heroImage } = useGraphQL();

  return (
    <article className="bg-white">
      <div className="relative w-full mx-auto overflow-hidden max-w-7xl">
        <div className="relative">
          <div className="absolute inset-0 w-full h-full">
            <GatsbyImage
              fluid={heroImage.childImageSharp.fluid}
              className="w-full h-full"
            />
          </div>
          <div className="relative flex flex-col py-12 bg-transparent-white-1/2">
            <div className="flex flex-col items-center justify-center md:w-1/2">
              <Copy />
            </div>
          </div>
        </div>
        <div className="overflow-hidden md:flex md:absolute md:bottom-0 md:right-0">
          <Buttons />
        </div>
      </div>
    </article>
  );
}

function Copy() {
  return (
    <>
      <h1 className="font-bold leading-none text-center text-black uppercase">
        <span className="text-6xl">20% off </span>
        <br />
        <span>head to toe looks</span>
      </h1>
      <span className="inline-flex mt-6 shadow-sm">
        <Link
          to="/products/ladies/"
          className="inline-flex items-center px-6 py-3 text-base font-bold leading-6 text-black uppercase transition duration-150 ease-in-out bg-white border border-transparent hover:text-gray-700 focus:outline-none focus:border-primary focus:shadow-outline-pink active:text-gray-800 active:bg-gray-50"
        >
          Shop now
        </Link>
      </span>
    </>
  );
}
function Buttons() {
  return (
    <>
      <Link
        to="/products/ladies/"
        className="inline-block w-full md:w-1/2 bg-brand-pink focus:outline-none focus:shadow-outline-pink group focus:bg-pink-500"
      >
        <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-pink group-focus:bg-pink-500">
          <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12 px4">
            Shop Ladies
          </h3>
        </span>
      </Link>
      <Link
        to="/products/mens/"
        className="inline-block w-full md:w-1/2 bg-brand-blue focus:outline-none focus:shadow-outline-pink group focus:bg-blue-900"
      >
        <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-blue group-focus:bg-blue-900">
          <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12 px4">
            Shop Mens
          </h3>
        </span>
      </Link>
    </>
  );
}
