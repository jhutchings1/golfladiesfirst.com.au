import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';
import logo from '../images/logo.svg';

const Hero = () => {
  const {
    site: {
      siteMetadata: { title },
    },
    heroImage,
  } = useGraphQL();

  return (
    <article className="md:flex">
      <div className="px-4 pt-6 pb-12 md:px-6 lg:px-8">
        <div className="md:w-64">
          <img src={logo} alt="" className="w-full max-w-xs mx-auto" />
          <h1 className="mt-12 text-2xl font-bold leading-tight uppercase">
            Welcome to {title}
          </h1>
          <div aria-hidden className="flex w-10/12 h-3 mt-6 overflow-hidden">
            <div className="w-1/2 bg-brand-pink">
              <div className="h-full transform -skew-x-12 bg-brand-pink" />
            </div>
            <div className="w-1/2 bg-brand-blue">
              <div className="h-full transform -skew-x-12 bg-brand-blue" />
            </div>
          </div>
          <p className="mt-6">
            With over 30 years experience in Scotland, Germany and Australia
            they felt the need to give women in a male dominated environment a
            friendly, comfortable atmosphere in which to involve themselves in
            Golf and the Pro Shop.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 text-white">
        <GatsbyImage
          fluid={heroImage.childImageSharp.fluid}
          className="flex-1 hidden h-full md:block"
        />
        <div className="mt-auto overflow-hidden md:flex">
          <div className="w-full md:w-1/2 bg-brand-pink">
            <div className="flex items-center justify-center py-12 transform -skew-x-12 bg-brand-pink">
              <Link
                to="/"
                className="inline-block px-8 py-2 text-sm font-bold tracking-wider uppercase transition duration-150 ease-in-out transform skew-x-12 border border-white hover:bg-white hover:text-brand-pink"
              >
                Shop Ladies
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-brand-blue">
            <div className="flex items-center justify-center py-12 transform -skew-x-12 bg-brand-blue">
              <Link
                to="/"
                className="inline-block px-8 py-2 text-sm font-bold tracking-wider uppercase transition duration-150 ease-in-out transform skew-x-12 border border-white hover:bg-white hover:text-brand-blue"
              >
                Shop Mens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export { Hero };
