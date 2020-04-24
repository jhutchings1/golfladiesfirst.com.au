import React, { useState, useEffect } from 'react';
import { ProductControls } from '../product-controls';
import { useGraphQL } from '../../hooks';
import { Tile } from '../tile';

export function ProductWrapper() {
  const { allShopifyProduct } = useGraphQL();
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filteredProducts = [...allShopifyProduct.nodes];
    setProducts(filteredProducts.splice(index, index + 9));
  }, [allShopifyProduct.nodes, index]);

  return (
    <div className="bg-white">
      <div className="w-full mx-auto max-w-7xl">
        <ProductControls
          index={index}
          setIndex={setIndex}
          products={allShopifyProduct.nodes}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {products.map((product) => (
            <Tile
              key={product.handle}
              slug={product.handle}
              title={product.title}
              price={Number(product.priceRange.minVariantPrice.amount)}
              image={product.images[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
