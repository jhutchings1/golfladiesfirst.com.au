import React from 'react';

import { Layout, SEO } from '../components';
import { EmptyCart, Cart } from '../components/cart';

import { useCartItems } from '../hooks';

export default function CartPage() {
  const lineItems = useCartItems();

  return (
    <Layout>
      <SEO title="Cart" />
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {lineItems.length < 1 ? <EmptyCart /> : <Cart />}
      </div>
    </Layout>
  );
}
