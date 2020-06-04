import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

export function Hero() {
  const { heroImage } = useGraphQL();
  return (
    <header className="w-full px-4 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <div className="relative">
        <div className="absolute inset-0">
          <GatsbyImage
            fluid={heroImage.childImageSharp.fluid}
            className="h-full"
          />
        </div>
        <h1 className="relative py-24 text-4xl font-bold text-center text-white uppercase bg-black bg-opacity-25">
          Testimonials
        </h1>
      </div>
    </header>
  );
}
