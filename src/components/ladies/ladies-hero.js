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
          <div className="relative flex flex-col py-12 bg-transparent-white-50">
            <div className="flex flex-col items-center justify-center md:w-1/2">
              <Copy />
            </div>
          </div>
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
          className="inline-flex items-center px-6 py-3 text-base font-bold leading-6 text-black uppercase transition duration-150 ease-in-out bg-white border border-transparent hover:text-gray-700 focus:outline-none focus:border-primary focus:shadow-outline-primary active:text-gray-800 active:bg-gray-50"
        >
          Shop now
        </Link>
      </span>
    </>
  );
}
