import React, { useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import PropTypes from 'prop-types';

import { Layout, SEO, Tile } from '../components';

export default function CollectionPageTemplate({
  data: { shopifyCollection },
}) {
  const { products } = shopifyCollection;

  const [prods, setProds] = useState(null);
  const [filteredProds, setFilteredProds] = useState(null);

  const location = useLocation();

  const queryString = parse(location.search);

  const theme = queryString.filter ? queryString.filter.toLowerCase() : '';

  useEffect(() => {
    if (queryString.filter) {
      const filteredProducts = products.filter((product) => {
        return product.tags.includes(
          `${queryString.filter[0].toUpperCase()}${queryString.filter.slice(
            1,
            queryString.filter.length
          )}`
        );
      });
      setFilteredProds(filteredProducts);
    }
  }, []);

  const [itemsToShow, setItemsToShow] = useState(8);

  const [finishedLoading, setFinishedLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function loadItems() {
    setItemsToShow(itemsToShow + 8);
    if (itemsToShow >= products.length) setFinishedLoading(true);
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
    if (filteredProds) {
      setProds(filteredProds.slice(0, itemsToShow));
    } else {
      setProds(products.slice(0, itemsToShow));
    }
  }, [filteredProds, products, itemsToShow]);

  return (
    <Layout theme={theme}>
      <SEO title={shopifyCollection.title} />
      <article className="px-4 bg-white sm:px-6 lg:px-8">
        <div className="py-24">
          <h1 className="text-center h2">{shopifyCollection.title}</h1>
          <div
            className="max-w-2xl mx-auto mt-6 text-center"
            dangerouslySetInnerHTML={{
              __html: shopifyCollection.descriptionHtml,
            }}
          />
        </div>
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
                  onSale={
                    shopifyCollection.title === 'Clearance Items' ||
                    product.variants[0].priceV2.currencyCode ===
                      product.variants[0].compareAtPriceV2?.currencyCode
                  }
                />
              ))
            : Array(itemsToShow)
                .fill('')
                .map((_, i) => <div key={i}>Loading...</div>)}
          {prods && prods.length === 0 && (
            <p className="text-center md:col-span-2 lg:col-span-4">
              Sorry, no products were found in the {shopifyCollection.title}{' '}
              collection.
            </p>
          )}
        </div>
        {/* Intersection observer is watching this div */}
        <div ref={setElement}>
          {!finishedLoading && (
            <p className="text-center">Scroll down to load more...</p>
          )}
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
        tags
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
        variants {
          compareAtPriceV2 {
            amount
            currencyCode
          }
          priceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
