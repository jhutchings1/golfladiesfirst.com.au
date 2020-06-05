import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

export function LadiesProductsHero() {
  const { heroImage } = useGraphQL();

  return (
    <article className="overflow-hidden bg-white">
      <div className="relative w-full mx-auto max-w-7xl">
        <div className="absolute inset-0 hidden h-full md:block">
          <GatsbyImage
            fluid={heroImage.childImageSharp.fluid}
            className="h-full"
          />
        </div>
        <div className="relative flex flex-wrap bg-white bg-opacity-50">
          <div className="flex w-full text-center md:w-1/2">
            <div className="absolute inset-0 h-full md:hidden">
              <GatsbyImage
                fluid={heroImage.childImageSharp.fluid}
                className="h-full"
              />
            </div>
            <div className="relative flex-1 py-12 bg-white bg-opacity-50 md:bg-opacity-0">
              <h1 className="font-bold leading-none text-center text-black uppercase">
                <span className="text-6xl">20% off </span>
                <br />
                <span>head to toe looks</span>
              </h1>
              <p className="uppercase">Discount applied at checkout</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
