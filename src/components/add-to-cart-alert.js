import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { useCartCount, useCheckout, useGraphQL } from '../hooks';
import { resizeShopifyImage } from '../utilities';

export function AddToCartAlert({
  title,
  variant,
  isAlertShown,
  setIsAlertShown,
}) {
  const count = useCartCount();

  const checkout = useCheckout();

  const {
    placeholderImage: { addToCartAlert },
  } = useGraphQL();

  const src = variant.image
    ? resizeShopifyImage({ url: variant.image.originalSrc, width: 96 })
    : addToCartAlert.fixed.src;

  function dismiss() {
    setIsAlertShown(false);
  }

  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  const transitions = useTransition(isAlertShown, null, {
    from: { opacity: 0, y: -1 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -1 },
  });

  return transitions.map(
    ({ item, key, props: { opacity, y } }) =>
      item && (
        <AnimatedDialogOverlay
          key={key}
          onDismiss={dismiss}
          style={{ opacity }}
          className="z-40 bg-transparent"
        >
          <AnimatedDialogContent
            aria-label="Add to cart notification"
            style={{
              transform: y.interpolate(
                (value) => `translate3d(0, ${value}rem, 0)`
              ),
            }}
            className="flex justify-end w-full px-4 py-2 mx-auto my-0 bg-transparent pointer-events-none max-w-7xl sm:px-6 lg:px-8"
          >
            <div className="relative w-full max-w-sm p-4 bg-white rounded shadow pointer-events-auto top-28 md:top-24 bg-white-50">
              <div
                aria-hidden
                className="absolute top-0 w-4 h-4 transform rotate-45 -translate-y-2 bg-white border border-b-0 border-r-0 border-gray-100 right-5"
              />
              <div>
                <div className="relative flex">
                  <div className="text-xl uppercase">
                    {count} items in your cart
                  </div>
                  <div className="pl-3 ml-auto">
                    <div className="-mx-1.5 -my-1.5">
                      <button
                        onClick={dismiss}
                        type="button"
                        className="inline-flex rounded-md p-1.5 text-primary hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div>
                    <img
                      src={src}
                      alt=""
                      className="object-contain w-24 h-24"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="font-bold leading-tight uppercase">
                      {title}
                    </h2>
                    <dl className="mt-1 text-gray-600">
                      {variant.selectedOptions.map((option, index) =>
                        option.name === 'Title' ||
                        option.name === 'Price' ? null : (
                          <div key={index}>
                            <dt className="inline">{option.name}: </dt>
                            <dd className="inline">{option.value}</dd>
                          </div>
                        )
                      )}
                    </dl>
                    <div>
                      1x <span className="font-bold">${variant.price}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between mt-6 sm:space-x-4 sm:flex-row">
                  <span className="inline-flex w-full shadow-sm">
                    <Link
                      to="/cart/"
                      className="inline-block w-full px-8 py-2 text-sm font-bold tracking-wider text-center uppercase transition duration-150 ease-in-out border border-white hover:bg-primary hover:text-white focus:outline-none focus:shadow-outline-primary border-primary text-primary"
                    >
                      View cart
                    </Link>
                  </span>
                  <span className="inline-flex w-full mt-4 shadow-sm sm:mt-0">
                    <a
                      href={checkout}
                      className="inline-block w-full px-8 py-2 text-sm font-bold tracking-wider text-center text-white uppercase transition duration-150 ease-in-out border border-primary bg-primary hover:bg-white hover:text-primary focus:outline-none focus:shadow-outline-primary"
                    >
                      Check out
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </AnimatedDialogContent>
        </AnimatedDialogOverlay>
      )
  );
}

AddToCartAlert.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.object.isRequired,
  isAlertShown: PropTypes.bool.isRequired,
  setIsAlertShown: PropTypes.func.isRequired,
};
