import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Tile } from '../components';

export default function CollectionPageTemplate({ data }) {
  const { products } = data.shopifyCollection;
  return (
    <Layout>
      <SEO title={data.shopifyCollection.title} />
      <article className="px-4 sm:px-6 lg:px-8">
        <h1 className="mt-24 text-center h2">{data.shopifyCollection.title}</h1>
        <div
          className="max-w-2xl mx-auto mt-6 text-center"
          dangerouslySetInnerHTML={{
            __html: data.shopifyCollection.descriptionHtml,
          }}
        />
        <div className="grid w-full max-w-6xl row-gap-6 col-gap-12 py-12 mx-auto md:grid-cols-2 lg:grid-cols-4 sm:py-16">
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
        priceRange {
          minVariantPrice {
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
