import React from 'react';

import {
  useCartItems,
  useCartTotals,
  useCheckout,
  useGraphQL,
} from '../../hooks';
import { LineItem } from './line-item';
import { AfterPay, ApplePay, Mastercard, PayPal, Visa } from '../vectors';
import { RelatedProducts } from '../related-products';

export function Cart() {
  const lineItems = useCartItems();
  const { total } = useCartTotals();
  const checkout = useCheckout();

  const {
    allShopifyProduct: { nodes: products },
  } = useGraphQL();

  const lineItemTitles = lineItems.map((lineItem) => lineItem.title) || [];

  return (
    <div className="relative pt-16 pb-20">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Cart
      </h1>
      <div className="mt-3 sm:mt-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-base font-medium leading-6 text-left text-gray-900 uppercase transition duration-150 ease-in-out hover:text-gray-700">
                Product
              </th>
              <th className="hidden pl-12 text-base font-medium leading-6 text-right text-gray-900 uppercase transition duration-150 ease-in-out hover:text-gray-700 lg:table-cell">
                Price
              </th>
              <th className="hidden pl-12 text-base font-medium leading-6 text-right text-gray-900 uppercase transition duration-150 ease-in-out hover:text-gray-700 lg:table-cell">
                Quantity
              </th>
              <th className="pl-12 text-base font-medium leading-6 text-right text-gray-900 uppercase transition duration-150 ease-in-out hover:text-gray-700">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item) => (
              <LineItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
        <hr className="my-3" />
        <div className="flex flex-wrap-reverse mt-12">
          <div className="flex items-start justify-center w-full mt-12 space-x-2 md:mt-0 md:w-1/2">
            <ApplePay className="h-8" />
            <Mastercard className="h-8" />
            <PayPal className="h-8" />
            <Visa className="h-8" />
            <AfterPay className="h-8" />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <dl className="font-medium">
              <div className="flex justify-between">
                <dt>Subtotal:</dt>
                <dd>{total}</dd>
              </div>
            </dl>
            <p className="text-center">
              <small>Taxes and shipping are calculated at checkout</small>
            </p>
            <span className="flex w-full mt-4 rounded-none shadow-sm">
              <a
                href={checkout}
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-none hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900"
              >
                Checkout
              </a>
            </span>
          </div>
        </div>
        <RelatedProducts
          product={{
            title: lineItemTitles.toString(),
          }}
          products={products}
        />
      </div>
    </div>
  );
}
