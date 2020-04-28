import React, { useEffect, useMemo, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { useAddItemToCart, useGraphQL } from '../hooks';
import {
  prepareVariantsWithOptions,
  prepareVariantsImages,
} from '../utilities';
import {
  Layout,
  SEO,
  Alert,
  Spinner,
  OptionPicker,
  Thumbnail,
} from '../components';

export default function ProductPage({ data: { shopifyProduct: product } }) {
  // Get available colours
  const colours =
    product.options.find((option) => option.name.toLowerCase() === 'colour')
      ?.values || [];

  // Get available sizes
  const sizes =
    product.options.find((option) => option.name.toLowerCase() === 'size')
      ?.values || [];

  // Format the data we get back from GraphQL for variants to be a little easier to work with
  // See comment in `prepare-variants-with-options.js`
  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ]);

  // Format the data we get back from GraphQL for images to be a little easier to work with
  // See comment in `prepare-variants-images.js`
  const images = useMemo(() => prepareVariantsImages(variants, 'colour'), [
    variants,
  ]);

  // Keep variants in state, and set the default variant to be the first item
  const [variant, setVariant] = useState(variants[0]);

  // Keep different colour options in state
  const [colour, setColour] = useState(variant.colour);

  // Keep different sizes in state
  const [size, setSize] = useState(variant.size);

  // Manage add to cart alerts in state
  const [addedToCartMessage, setAddedToCartMessage] = useState(null);

  // Use a custom hook for adding items to cart
  const addItemToCart = useAddItemToCart();

  // Whenever we add an item to the cart, also create an alert to notify the customer of this
  // Note: we are hard coding the number of items to be added to cart as 1, we can add another useState instance to address this in the future if we need to
  function handleAddToCart() {
    addItemToCart(variant.shopifyId, 1);
    setAddedToCartMessage('Added to your cart!');
  }

  // This handles adding the correct variant to the cart
  useEffect(() => {
    const newVariant = variants.find((v) => {
      return v.size === size && v.colour === colour;
    });

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant);
    }
  }, [size, colour, variants, variant.shopifyId]);

  // Add a ref to image wrapper so that we can detect when it enters the viewport using IntersectionObserver
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // Create a ref for the product image
  const imgRef = useRef(null);

  // If product doesn't have an image, we can use a placeholder
  const { placeholderImage } = useGraphQL();

  // Show a spinner until `imgLoaded === true`
  const [imgLoaded, setImgLoaded] = useState(false);

  // When image enters the screen swap out src for the data-src
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
          <div>
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
                className="absolute inset-0 object-contain h-full mx-auto overflow-hidden duration-500 ease-in-out transform hover:scale-110"
              />
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
                  <Spinner />
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="grid">
                {images.map((img) => (
                  <Thumbnail
                    key={img.colour}
                    src={img.src}
                    onClick={() => setColour(colour)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="mt-12">
            <h1 className="h2">{product.title}</h1>
            <div className="grid gap-4 mt-6 sm:grid-cols-2">
              {colours.length > 1 && (
                <OptionPicker
                  key="Colour"
                  name="Colour"
                  options={colours}
                  selected={colour}
                  onChange={(event) => setColour(event.target.value)}
                />
              )}
              {sizes.length > 1 && (
                <OptionPicker
                  key="Size"
                  name="Size"
                  options={sizes}
                  selected={size}
                  onChange={(event) => setSize(event.target.value)}
                />
              )}
            </div>
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
