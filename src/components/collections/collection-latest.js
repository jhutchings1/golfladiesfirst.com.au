import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import resolveConfig from 'tailwindcss/resolveConfig';

import { useGraphQL, useMediaQuery } from '../../hooks';
import tailwindConfig from '../../../tailwind.config.js';
import { Tile } from '../tile';

export function CollectionLatest() {
  const {
    latestSkirtsAndSkortsCollection: { nodes: products },
  } = useGraphQL();

  const [index, setIndex] = useState(0);

  const fullConfig = resolveConfig(tailwindConfig);

  const screenSize = useMediaQuery(
    `(min-width: ${fullConfig.theme.screens.lg})`,
    4,
    2
  );

  return (
    <article className="bg-white">
      <div className="relative w-full max-w-lg px-4 py-12 mx-auto sm:max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <h2 className="h2">Latest ladies and mens shirts</h2>
        <Carousel
          slideIndex={index}
          afterSlide={(slideIndex) => setIndex(slideIndex)}
          slidesToShow={screenSize}
          withoutControls
          wrapAround
          heightMode="max"
          className="relative flex w-full mt-12 focus:outline-none focus:shadow-outline-primary"
        >
          {products.map((product) => (
            <Tile
              key={product.handle}
              slug={product.handle}
              title={product.title}
              price={Number(product.priceRange.minVariantPrice.amount)}
              image={product.images[0]}
            />
          ))}
        </Carousel>
        <span className="absolute inset-y-0 left-0 inline-flex items-center pointer-events-none">
          <button
            type="button"
            onClick={() => setIndex(index - 1)}
            className="px-1 py-1 text-white transition duration-150 ease-in-out pointer-events-auto bg-primary focus:outline-none focus:shadow-outline-primary"
          >
            <span className="sr-only">Previous slide</span>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
        <span className="absolute inset-y-0 right-0 inline-flex items-center pointer-events-none">
          <button
            type="button"
            onClick={() => setIndex(index + 1)}
            className="px-1 py-1 text-white transition duration-150 ease-in-out pointer-events-auto bg-primary focus:outline-none focus:shadow-outline-primary"
          >
            <span className="sr-only">Next slide</span>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
    </article>
  );
}
