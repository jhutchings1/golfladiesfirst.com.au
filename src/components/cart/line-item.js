import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';

import {
  useGraphQL,
  useRemoveItemFromCart,
  useUpdateQuantity,
} from '../../hooks';
import { Spinner } from '../spinner';

export const LineItem = ({ item }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
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

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find((variant) => {
      return variant.shopifyId === variantId;
    });

    if (selectedVariant) {
      return selectedVariant.image;
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

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const imgRef = useRef(null);

  useEffect(() => {
    if (inView) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, [inView]);

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        <div ref={ref} className="relative w-48">
          <img
            ref={imgRef}
            data-src={getImageFluidForVariant(item.variant.id).originalSrc}
            alt=""
            onLoad={() => setImgLoaded(true)}
          />
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
              <Spinner />
            </div>
          )}
        </div>
        <div className="ml-4">
          <Link
            to={`/products/${getHandleForVariant(item.variant.id)}`}
            className="text-lg font-medium leading-6 text-gray-900 underline transition duration-150 ease-in-out hover:text-gray-600"
          >
            {item.title}
          </Link>
          <dl className="mt-2 text-base leading-6 text-gray-500">
            {item.variant.selectedOptions.map(({ name, value }) => (
              <div key={name}>
                <dt className="inline font-medium text-gray-500">{name}: </dt>
                <dd className="inline mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                  {value}
                </dd>
              </div>
            ))}
            <div key="quantity">
              <dt className="inline font-medium text-gray-500">Quantity: </dt>
              <dd className="inline mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
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
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex items-baseline ml-auto">
        <button
          onClick={() => removeFromCart(item.id)}
          type="button"
          className="text-gray-800 underline transition duration-150 ease-in-out hover:text-gray-600"
        >
          Delete
        </button>
        <div className="ml-4 text-3xl font-bold text-gray-900">
          <small className="font-normal">AUD</small> $
          {Number(item.variant.priceV2.amount * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

LineItem.propTypes = {
  item: PropTypes.object,
};
