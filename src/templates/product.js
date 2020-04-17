import React, { useEffect, useMemo, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import Spinner from 'react-svg-spinner';
import resolveConfig from 'tailwindcss/resolveConfig';

import { useAddItemToCart, useGraphQL } from '../hooks';
import { prepareVariantsWithOptions } from '../utilities';
import { Layout, SEO, Alert } from '../components';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

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
    setAddedToCartMessage('🛒 Added to your cart!');
  }

  useEffect(() => {
    if (inView) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, [inView]);

  return (
    <Layout>
      <SEO title={product.title} />
      <div className="relative pt-16 pb-20">
        <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8">
          {addedToCartMessage && (
            <Alert
              message={addedToCartMessage}
              dismiss={() => setAddedToCartMessage(null)}
            />
          )}
          <div ref={ref} className="relative h-0 aspect-ratio-square">
            <img
              ref={imgRef}
              data-src={
                variant.image
                  ? variant.image.originalSrc
                  : placeholderImage.publicURL
              }
              onLoad={() => setImgLoaded(true)}
              alt={variant?.image?.altText && variant.image.altText}
              width={592}
              height={592}
              className="absolute inset-0 object-cover h-full overflow-hidden rounded-md shadow"
            />
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
                <Spinner
                  size={fullConfig.theme.spacing[8]}
                  color={fullConfig.theme.colors.brand.pink}
                  thickness={3}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col mt-16">
            <h1 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              {product.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              className="mt-4 text-base leading-6 text-gray-500 sm:mt-3"
            />
            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                type="button"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
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
          altText
          originalSrc
        }
      }
    }
  }
`;
