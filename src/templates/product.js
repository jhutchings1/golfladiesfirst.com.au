import React, { useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { useAddItemToCart, useGraphQL, useLazyLoad } from '../hooks';
import {
  prepareVariantsWithOptions,
  prepareVariantsImages,
} from '../utilities';
import {
  Layout,
  SEO,
  Alert,
  OptionPicker,
  SizePicker,
  Thumbnail,
  RelatedProducts,
} from '../components';

export default function ProductPage({ data: { shopifyProduct: product } }) {
  // Lazy load images using custom hook
  const {
    ref,
    imgRef,
    isImgLoaded,
    setImgLoaded,
    handleImgLoaded,
    Spinner,
  } = useLazyLoad();

  const {
    allShopifyProduct: { nodes: products },
  } = useGraphQL();

  // Get all possible colours
  const colours =
    product.options.find((option) => option.name.toLowerCase() === 'colour')
      ?.values || [];

  // Get all possible sizes
  const sizes =
    product.options.find((option) => option.name.toLowerCase() === 'size')
      ?.values || [];

  // Get all possible handedness
  const handednessOptions =
    product.options.find((option) => option.name.toLowerCase() === 'handness')
      ?.values || [];

  // Get all possible voucher values
  const voucherOptions =
    product.options.find((option) => option.name.toLowerCase() === 'price')
      ?.values || [];

  // Format the data we get back from GraphQL for variants to be a little easier to work with
  // See comment in `prepare-variants-with-options.js`
  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ]);

  // Get list of colours that are actually available
  // const availableColours = [];

  // for (let i = 0; i < colours.length; i++) {
  //   const newVar = variants.find((v) => {
  //     return v.colour === colours[i] && v.availableForSale === true;
  //   });

  //   if (typeof newVar === 'object') availableColours.push(newVar.colour);
  // }

  // Keep variants in state, and set the default variant to be the first available item
  const [variant, setVariant] = useState(
    variants.find((v) => v.availableForSale === true) || variants[0]
  );

  // Format the data we get back from GraphQL for images to be a little easier to work with
  // See comment in `prepare-variants-images.js`
  const images = useMemo(() => prepareVariantsImages(variants, 'colour'), [
    variants,
  ]);

  // Keep different colour options in state
  const [colour, setColour] = useState(variant.colour);

  // Keep different sizes in state
  const [size, setSize] = useState(variant.size);

  // Keep different handedness options in state
  const [handedness, setHandedness] = useState(variant.handness);

  // Keep different voucher values in state
  const [voucherValue, setVoucherValue] = useState();

  const [addToCartDisabled, setAddToCartDisabled] = useState(false);

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
    let newVariant;

    // Try to find the variant with selected size and colour (and handedness, if applicable)
    if (handedness) {
      newVariant = variants.find((v) => {
        return (
          v.size === size && v.colour === colour && v.handness === handedness
        );
      });
    } else if (voucherValue) {
      newVariant = variants.find((v) => {
        return v.selectedOptions[0].value === voucherValue;
      });
    } else {
      newVariant = variants.find((v) => {
        return v.size === size && v.colour === colour;
      });
    }

    if (typeof newVariant === 'object') {
      setVariant(newVariant);
      setAddToCartDisabled(false);
      if (!newVariant.availableForSale) {
        // If variant exists but availableForSale = false, autoselect first available size
        // setSize(
        //   variants.find((v) => {
        //     return (
        //       v.colour === colour &&
        //       v.handness === handedness &&
        //       v.availableForSale === true
        //     );
        //   }).size
        // );
        setAddToCartDisabled(true);
      }
    } else {
      // If variant doesn't exist

      // setVariant(
      //   variants.find((v) => {
      //     return v.colour === colour && v.handness === handedness;
      //   })
      // );
      // setSize(
      //   variants.find((v) => {
      //     return v.colour === colour && v.handness === handedness; // Autoselects first available size in chosen colour. This should never fail because all colours in the list have sizes available
      //   }).size
      // );
      setAddToCartDisabled(true);
    }
  }, [size, colour, handedness, variants, voucherValue, variant.shopifyId]);

  // If product doesn't have an image, we can use a placeholder
  const { placeholderImage } = useGraphQL();

  // Keep source for primary image in state
  const [imgSrc, setImgSrc] = useState(placeholderImage.publicURL);

  // Update the primary image whenever the variant changes
  useEffect(() => {
    if (variant.image) {
      setImgSrc(variant.image.originalSrc);
      imgRef.current.src = imgSrc;
    }
  }, [variant, imgSrc, imgRef]);

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
          <div className="grid gap-6 mt-2">
            <div
              ref={ref}
              className="relative h-0 overflow-hidden bg-white aspect-ratio-square"
            >
              <img
                ref={imgRef}
                data-src={imgSrc}
                onLoad={handleImgLoaded}
                alt=""
                width={592}
                height={592}
                className="absolute inset-0 object-contain h-full mx-auto duration-500 ease-in-out transform hover:scale-110"
              />
              {!isImgLoaded && <Spinner />}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-3 gap-6">
                {images.map((img) => (
                  <Thumbnail
                    key={img.colour}
                    src={img.src}
                    onClick={() => {
                      setColour(img.colour);
                      setImgLoaded(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="mt-12">
            <h1 className="font-normal h2">{product.title}</h1>
            <dl>
              <dt className="sr-only">Price:</dt>
              <dd className="mt-2 h2 text-primary">${variant.price}</dd>
            </dl>
            <div className="grid items-end gap-4 mt-6 sm:grid-cols-2">
              {colours.length > 1 && (
                <OptionPicker
                  key="Colour"
                  name="Colour"
                  options={colours}
                  selected={colour}
                  handleChange={(event) => setColour(event.target.value)}
                />
              )}
              {voucherOptions.length > 1 && (
                <OptionPicker
                  key="Value"
                  name="Value"
                  options={voucherOptions}
                  selected={voucherValue}
                  handleChange={(event) => setVoucherValue(event.target.value)}
                />
              )}
              {handednessOptions.length > 1 && (
                <OptionPicker
                  key="Handedness"
                  name="Handedness"
                  options={handednessOptions}
                  selected={handedness}
                  handleChange={(event) => setHandedness(event.target.value)}
                />
              )}
              {sizes.length > 1 && (
                <SizePicker
                  key="Size"
                  name="Size"
                  available={!variant.availableForSale}
                  options={sizes}
                  colour={colour}
                  handedness={handedness}
                  selected={size}
                  variants={variants}
                  setSize={setSize}
                />
              )}
            </div>
            {addToCartDisabled && (
              <p className="mt-2">
                This combination of product options is currently unavailable.
              </p>
            )}
            <span className="inline-flex mt-6 shadow-sm">
              <button
                onClick={handleAddToCart}
                disabled={addToCartDisabled}
                type="button"
                className={`${
                  addToCartDisabled ? 'bg-gray-900' : 'bg-primary'
                } inline-flex items-center justify-center px-12 py-2 text-base font-medium leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-none hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-primary active:bg-gray-900`}
              >
                Add to Cart
              </button>
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              className="grid gap-4 mt-6 text-base leading-6 text-gray-700"
            />
          </div>
        </div>
        <RelatedProducts product={product} products={products} />
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
