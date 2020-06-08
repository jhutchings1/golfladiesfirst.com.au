import React, { useState, useEffect, useRef } from 'react';
import { useGraphQL } from '../../hooks';
import { Tile } from '../tile';

export function ProductWrapper() {
  const { allShopifyProduct } = useGraphQL();
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(8);
  const [finishedLoading, setFinishedLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function loadItems() {
    setItemsToShow(itemsToShow + 8);
    if (itemsToShow >= allShopifyProduct.nodes.length) setFinishedLoading(true);
  }

  const loader = useRef(loadItems);

  const observer = useRef();

  const [element, setElement] = useState(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    );
  }, []);

  useEffect(() => {
    loader.current = loadItems;
  }, [loadItems]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    const filteredProducts = [...allShopifyProduct.nodes];
    setProducts(
      filteredProducts.slice(
        index * itemsToShow,
        index * itemsToShow + itemsToShow
      )
    );
  }, [allShopifyProduct.nodes, index, itemsToShow]);

  return (
    <div className="bg-white">
      <div className="w-full mx-auto max-w-7xl">
        {/* <ProductControls
          index={index}
          setIndex={setIndex}
          products={allShopifyProduct.nodes}
          itemsToShow={itemsToShow}
          setItemsToShow={setItemsToShow}
        /> */}
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
        {/* Intersection observer is watching this div */}
        <div ref={setElement}>
          {!finishedLoading && (
            <p className="text-center">Scroll down to load more...</p>
          )}
        </div>
      </div>
    </div>
  );
}
