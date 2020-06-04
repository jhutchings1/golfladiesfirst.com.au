import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import {
  useGraphQL,
  useLazyLoad,
  useRemoveItemFromCart,
  useUpdateQuantity,
} from '../../hooks';

export function LineItem({ item }) {
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
    placeholderImage,
  } = useGraphQL();

  const removeFromCart = useRemoveItemFromCart();
  const updateQuantity = useUpdateQuantity();

  const [quantity, setQuantity] = useState(item.quantity);

  const betterProductHandles = products.map((product) => {
    const newVariants = product.variants.map((variant) => variant.shopifyId);
    return {
      variants: newVariants,
      handle: product.handle,
    };
  });

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find((product) => {
      return product.variants.includes(variantId);
    });

    return selectedProduct ? selectedProduct.handle : null;
  }

  function getImageForVariant(variantId) {
    const selectedVariant = variants.find((variant) => {
      return variant.shopifyId === variantId;
    });

    if (selectedVariant) {
      return selectedVariant.image
        ? selectedVariant.image.originalSrc
        : placeholderImage.publicURL;
    }
    return null;
  }

  function handleChange(event) {
    if (event.target.value >= 1) {
      setQuantity(event.target.value);
      updateQuantity(item.id, event.target.value);
    } else if (event.target.value === '') {
      setQuantity('');
      updateQuantity(item.id, 1);
    }
  }

  function handleBlur() {
    if (quantity === '') setQuantity(1);
  }

  const { ref, imgRef, isImgLoaded, handleImgLoaded, Spinner } = useLazyLoad();
  return (
    <tr className="border-t">
      <td className="py-4">
        <div className="flex items-start">
          <div>
            <div className="mr-4">
              <div
                ref={ref}
                className="relative w-24 h-0 sm:w-48 aspect-ratio-square"
              >
                <img
                  ref={imgRef}
                  data-src={getImageForVariant(item.variant.id)}
                  alt=""
                  onLoad={handleImgLoaded}
                  className="absolute inset-0 object-contain w-full h-full"
                />
                {!isImgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
                    <Spinner />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="pt-4 sm:pt-0">
            <div>
              <Link
                to={`/products/${getHandleForVariant(item.variant.id)}`}
                className="text-lg font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-600"
              >
                {item.title}
              </Link>
            </div>
            <dl className="mt-2 text-base leading-6 text-gray-500">
              {item.variant.selectedOptions.map(
                ({ name, value }) =>
                  value !== 'Default Title' && (
                    <div key={name}>
                      <dt className="inline font-medium text-gray-500">
                        {name}:{' '}
                      </dt>
                      <dd className="inline mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                        {value}
                      </dd>
                    </div>
                  )
              )}
            </dl>
            <button
              onClick={() => removeFromCart(item.id)}
              type="button"
              className="text-gray-800 underline transition duration-150 ease-in-out hover:text-gray-600"
            >
              Remove
            </button>
          </div>
        </div>
      </td>
      <td className="hidden pl-12 text-right lg:table-cell">
        <div className="flex flex-col items-start">
          ${Number(item.variant.priceV2.amount).toFixed(2)}
        </div>
      </td>
      <td className="hidden pl-12 text-right lg:table-cell">
        <label htmlFor="cart_qty">
          <span className="sr-only">Quantity</span>
          <input
            id="cart_qty"
            className="w-16 rounded-none form-input"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={quantity}
            min={0}
            pattern="[0-9]*"
          />
        </label>
      </td>
      <td className="py-4 text-right align-top lg:align-middle">
        <div>
          ${Number(item.variant.priceV2.amount * item.quantity).toFixed(2)}
        </div>
        <div className="mt-4 lg:hidden">
          <label htmlFor="cart_qty">
            <div className="mt-2 text-sm">Quantity</div>
            <input
              id="cart_qty"
              className="w-16 mt-2 rounded-none form-input"
              type="number"
              onChange={handleChange}
              value={quantity}
              min={0}
              pattern="[0-9]*"
            />
          </label>
        </div>
      </td>
    </tr>
  );
}

LineItem.propTypes = {
  item: PropTypes.object,
};
