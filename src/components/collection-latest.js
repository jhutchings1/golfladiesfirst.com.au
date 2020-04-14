import React from 'react';

import { useGraphQL } from '../hooks';
import { Tile } from './tile';

export function CollectionLatest() {
  const {
    allShopifyProduct: { nodes: products },
  } = useGraphQL();
  return (
    <article className="relative w-full max-w-lg pt-16 pb-20 mx-auto sm:max-w-none lg:pt-24 lg:pb-28">
      <h2 className="h2">Latest ladies and mens shirts</h2>
      <div className="grid w-full grid-cols-2 gap-5 mt-12 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Tile
            key={product.handle}
            slug={product.handle}
            title={product.title}
            price={Number(product.priceRange.minVariantPrice.amount)}
            image={product.images[0].localFile.childImageSharp.fluid}
          />
        ))}
      </div>
    </article>
  );
}
