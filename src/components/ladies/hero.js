import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

const Hero = () => {
  const { heroImage } = useGraphQL();

  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0 h-full">
        <GatsbyImage fluid={heroImage.childImageSharp.fluid} />
      </div>
      <div className="relative flex bg-transparent-white-25">
        <div className="py-12 text-center md:w-1/2">
          <h1 className="font-bold leading-none text-center text-black uppercase">
            <span className="text-6xl">20% off </span>
            <br />
            <span>head to toe looks</span>
          </h1>
          <p className="uppercase">Discount applied at checkout</p>
        </div>
        <span className="mt-auto ml-auto overflow-hidden md:inline-flex">
          <Link to="/ladies/" className="w-full md:w-1/2 bg-brand-pink">
            <span className="flex items-center justify-center transform -skew-x-12 bg-brand-pink">
              <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform skew-x-12 px4">
                Shop Ladies
              </h3>
            </span>
          </Link>
          <Link to="/men/" className="w-full md:w-1/2 bg-brand-blue">
            <span className="flex items-center justify-center transform -skew-x-12 bg-brand-blue">
              <h3 className="px-12 py-4 text-sm font-bold tracking-wider text-white uppercase whitespace-no-wrap transform skew-x-12 px4">
                Shop Mens
              </h3>
            </span>
          </Link>
        </span>
      </div>
    </article>
  );
};

export { Hero };
