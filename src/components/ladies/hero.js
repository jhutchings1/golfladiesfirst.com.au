import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

const Hero = () => {
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
        <div className="relative flex flex-wrap bg-transparent-white-50">
          <div className="flex w-full text-center md:w-1/2">
            <div className="absolute inset-0 h-full md:hidden">
              <GatsbyImage
                fluid={heroImage.childImageSharp.fluid}
                className="h-full"
              />
            </div>
            <div className="relative flex-1 py-12 bg-transparent-white-50 md:bg-transparent">
              <h1 className="font-bold leading-none text-center text-black uppercase">
                <span className="text-6xl">20% off </span>
                <br />
                <span>head to toe looks</span>
              </h1>
              <p className="uppercase">Discount applied at checkout</p>
            </div>
          </div>
          <div className="w-full mt-auto ml-auto overflow-hidden md:inline-flex md:w-1/2">
            <Link to="/ladies/" className="w-full md:w-1/2 bg-brand-pink">
              <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-pink">
                <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12 px4">
                  Shop Ladies
                </h3>
              </span>
            </Link>
            <Link to="/men/" className="w-full md:w-1/2 bg-brand-blue">
              <span className="flex items-center justify-center transform md:-skew-x-12 bg-brand-blue">
                <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform md:skew-x-12 px4">
                  Shop Mens
                </h3>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export { Hero };
