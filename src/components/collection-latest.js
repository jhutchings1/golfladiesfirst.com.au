import React, { useState } from 'react';
import Carousel from 'nuka-carousel';

import { useGraphQL } from '../hooks';
import { Tile } from './tile';

export function CollectionLatest() {
  const {
    latestSkirtsAndSkortsCollection: { nodes: products },
  } = useGraphQL();
  const [index, setIndex] = useState(0);
  return (
    <article className="relative w-full max-w-lg pt-16 pb-20 mx-auto sm:max-w-none lg:pt-24 lg:pb-28">
      <h2 className="h2">Latest ladies and mens shirts</h2>
      <Carousel
        slideIndex={index}
        afterSlide={(slideIndex) => setIndex(slideIndex)}
        slidesToShow={4}
        withoutControls
        wrapAround
        className="relative flex w-full mt-12"
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
          className="px-4 py-2 text-white rounded-md pointer-events-auto bg-brand-pink"
        >
          Prev
        </button>
      </span>
      <span className="absolute inset-y-0 right-0 inline-flex items-center pointer-events-none">
        <button
          type="button"
          onClick={() => setIndex(index + 1)}
          className="px-4 py-2 text-white rounded-md pointer-events-auto bg-brand-pink"
        >
          Next
        </button>
      </span>
    </article>
  );
}
