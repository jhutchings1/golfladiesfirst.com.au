import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { ProductControls } from '../components/product-controls';

import { Layout, SEO, Tile } from '../components';

export default function CollectionPageTemplate({ data }) {
  const { products } = data.shopifyCollection;

  const [prods, setProds] = useState(null);
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(8);
  useEffect(() => {
    setProds(
      products.slice(index * itemsToShow, index * itemsToShow + itemsToShow)
    );
  }, [products, index, itemsToShow]);

  return (
    <Layout>
      <SEO title={data.shopifyCollection.title} />
      <article className="px-4 bg-white sm:px-6 lg:px-8">
        <div className="py-24">
          <h1 className="text-center h2">{data.shopifyCollection.title}</h1>
          <div
            className="max-w-2xl mx-auto mt-6 text-center"
            dangerouslySetInnerHTML={{
              __html: data.shopifyCollection.descriptionHtml,
            }}
          />
        </div>
        <ProductControls
          index={index}
          setIndex={setIndex}
          products={products}
          itemsToShow={itemsToShow}
          setItemsToShow={setItemsToShow}
        />
        <div className="grid w-full max-w-6xl row-gap-6 col-gap-12 py-12 mx-auto md:grid-cols-2 lg:grid-cols-4 sm:py-16">
          {prods
            ? prods.map((product) => (
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
      </article>
    </Layout>
  );
}

CollectionPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      id
      title
      handle
      descriptionHtml
      shopifyId
      products {
        title
        handle
        availableForSale
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        images {
          originalSrc
          id
        }
      }
    }
  }
`;
