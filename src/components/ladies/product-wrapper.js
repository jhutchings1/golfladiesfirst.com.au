import React, { useState, useEffect } from 'react';
import { ProductControls } from '../product-controls';
import { useGraphQL } from '../../hooks';
import { Tile } from '../tile';

export function ProductWrapper() {
  const { allShopifyProduct } = useGraphQL();
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(8);
  useEffect(() => {
    const filteredProducts = [...allShopifyProduct.nodes];
    setProducts(filteredProducts.splice(index * itemsToShow, itemsToShow));
  }, [allShopifyProduct.nodes, index, itemsToShow]);

  return (
    <div className="bg-white">
      <div className="w-full mx-auto max-w-7xl">
        <ProductControls
          index={index}
          setIndex={setIndex}
          products={allShopifyProduct.nodes}
          itemsToShow={itemsToShow}
          setItemsToShow={setItemsToShow}
        />
        <div className="grid row-gap-6 col-gap-12 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8 sm:py-16">
          {products
            ? products.map((product) => (
                <Tile
                  key={product.handle}
                  slug={product.handle}
                  title={product.title}
                  price={Number(product.priceRange.minVariantPrice.amount)}
                  image={product.images[0]}
                  constantPrice={
                    product.priceRange.minVariantPrice.amount ===
                    product.priceRange.maxVariantPrice.amount
                  }
                  available={product.availableForSale}
                />
              ))
            : Array(itemsToShow)
                .fill('')
                .map((_, i) => <div key={i}>Loading...</div>)}
        </div>
      </div>
    </div>
  );
}
