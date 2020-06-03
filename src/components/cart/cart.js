import React from 'react';

import { useCartItems, useCartTotals, useCheckout } from '../../hooks';
import { LineItem } from './line-item';

export function Cart() {
  const lineItems = useCartItems();
  const { tax, total } = useCartTotals();
  const checkout = useCheckout();
  return (
    <div className="relative pt-16 pb-20">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Cart
      </h1>
      <div className="mt-3 sm:mt-4">
        {lineItems.map((item) => (
          <React.Fragment key={item.id}>
            <LineItem key={item.id} item={item} />
            <hr className="my-4" />
          </React.Fragment>
        ))}
        <div className="flex">
          <div className="w-full px-4 py-6 bg-gray-100 rounded-md shadow sm:max-w-xs sm:ml-auto">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Cart Summary
            </h3>
            <hr className="my-3" />
            <dl className="grid row-gap-3">
              <div className="flex justify-between">
                <dt>Subtotal:</dt>
                <dd>
                  <small className="font-normal">AUD</small> {total}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping:</dt>
                <dd> - </dd>
              </div>
              <div className="flex justify-between">
                <dt>Tax: </dt>
                <dd>
                  <small className="font-normal">AUD</small> {tax}
                </dd>
              </div>
            </dl>

            <hr className="my-3" />
            <dl className="font-medium">
              <div className="flex justify-between">
                <dt>Estimated Total:</dt>
                <dd>
                  <small className="font-normal">AUD</small> {total}
                </dd>
              </div>
            </dl>
            <span className="inline-flex w-full mt-6 shadow-sm">
              <a
                href={checkout}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-none hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-primary active:bg-gray-900"
              >
                Checkout
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
