import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';

export function CollectionPromo() {
  const { heroImage } = useGraphQL();
  return (
    <article className="relative w-full max-w-lg mx-auto sm:max-w-none">
      <div className="grid w-full gap-5 py-5 mt-12 md:grid-cols-2">
        <div className="relative">
          <div className="h-0 aspect-ratio-square">
            <div className="absolute inset-0 w-full h-full">
              <GatsbyImage
                fluid={heroImage.childImageSharp.fluid}
                className="h-full"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white bg-transparent-black-50">
            <h2 className="h2">
              <span className="text-4xl">Shop ladies &amp; </span>
              <br />
              <span className="text-4xl">get 20% off </span>
              <br />
              <span className="leading-7">head to toe looks</span>
            </h2>
            <Link
              to="/"
              className="inline-block px-8 py-2 mt-4 text-sm font-bold tracking-wider uppercase transition duration-150 ease-in-out border border-brand-pink bg-brand-pink hover:bg-white hover:text-brand-pink hover:border-white"
            >
              Shop Ladies
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="h-0 aspect-ratio-square">
            <div className="absolute inset-0 w-full h-full">
              <GatsbyImage
                fluid={heroImage.childImageSharp.fluid}
                className="h-full"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white bg-transparent-black-50">
            <h2 className="text-2xl font-bold leading-none text-center uppercase">
              <span className="text-4xl">Shop mens &amp; </span>
              <br />
              <span className="text-4xl">get 20% off </span>
              <br />
              <span className="leading-7">head to toe looks</span>
            </h2>
            <Link
              to="/"
              className="inline-block px-8 py-2 mt-4 text-sm font-bold tracking-wider uppercase transition duration-150 ease-in-out border border-brand-blue bg-brand-blue hover:bg-white hover:text-brand-blue hover:border-white"
            >
              Shop Mens
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
