import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Tile } from './tile';

export function RelatedProducts({
  product: { title: productTitle },
  products,
}) {
  const searchTerms = Object.values(productTitle.split(' ')).map(
    (value) => value
  );
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const results = [];

    products.map((prod) => {
      for (let i = 0; i < searchTerms.length; i += 1) {
        if (
          prod.title.toLowerCase().indexOf(searchTerms[i].toLowerCase()) !== -1
        )
          if (!results.includes(prod) && prod.title !== productTitle)
            results.push(prod);
      }
      return setRelatedProducts(results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (relatedProducts.length < 1) return null;
  return (
    <article className="mt-24">
      <h2 className="text-center h2">You May Also Like</h2>
      <ul className="grid row-gap-6 col-gap-12 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8 sm:py-16">
        {relatedProducts.slice(0, 4).map((prod) => (
          <li key={prod.handle}>
            <Tile
              title={prod.title}
              slug={prod.handle}
              price={Number(prod.priceRange.minVariantPrice.amount)}
              image={prod.images[0]}
              constantPrice={
                prod.priceRange.minVariantPrice.amount ===
                prod.priceRange.maxVariantPrice.amount
              }
            />
          </li>
        ))}
      </ul>
    </article>
  );
}

RelatedProducts.propTypes = {
  product: PropTypes.object,
  products: PropTypes.array,
};
