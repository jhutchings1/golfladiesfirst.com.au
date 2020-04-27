import React, { useEffect, useMemo, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { useAddItemToCart, useGraphQL } from '../hooks';
import { prepareVariantsWithOptions } from '../utilities';
import { Layout, SEO, Alert, Spinner } from '../components';

export default function ProductPage({ data: { shopifyProduct: product } }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const { placeholderImage } = useGraphQL();

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const imgRef = useRef(null);

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ]);

  const addItemToCart = useAddItemToCart();
  const variant = variants[0];
  const [addedToCartMessage, setAddedToCartMessage] = useState(null);

  function handleAddToCart() {
    addItemToCart(variant.shopifyId, 1);
    setAddedToCartMessage('Added to your cart!');
  }

  useEffect(() => {
    if (inView) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, [inView]);

  return (
    <Layout>
      <SEO title={product.title} />
      <article className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {addedToCartMessage && (
            <Alert
              message={addedToCartMessage}
              dismiss={() => setAddedToCartMessage(null)}
            />
          )}
          <div
            ref={ref}
            className="relative h-0 mt-2 overflow-hidden aspect-ratio-square"
          >
            <img
              ref={imgRef}
              data-src={
                variant.image
                  ? variant.image.originalSrc
                  : placeholderImage.publicURL
              }
              onLoad={() => setImgLoaded(true)}
              alt=""
              width={592}
              height={592}
              className="absolute inset-0 object-cover h-full mx-auto overflow-hidden duration-500 ease-in-out transform hover:scale-110"
            />
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
                <Spinner />
              </div>
            )}
          </div>
          <div className="mt-12">
            <h1 className="h2">{product.title}</h1>
            <span className="inline-flex mt-6 shadow-sm">
              <button
                onClick={handleAddToCart}
                type="button"
                className="inline-flex items-center justify-center px-12 py-3 text-base font-medium leading-6 text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-none hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-primary active:bg-gray-900"
              >
                Add to Cart
              </button>
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              className="mt-6 text-base leading-6 text-gray-700"
            />
          </div>
        </div>
      </article>
    </Layout>
  );
}

ProductPage.propTypes = {
  data: PropTypes.object,
};

export const ProductPageQuery = graphql`
  query productPage($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      descriptionHtml
      options {
        name
        values
      }
      variants {
        availableForSale
        id
        price
        shopifyId
        sku
        title
        selectedOptions {
          name
          value
        }
        image {
          originalSrc
        }
      }
    }
  }
`;
