import React from 'react';

import { Layout, SEO } from '../components';
import { EmptyCart, Cart } from '../components/cart';

import { useCartItems } from '../hooks';

export default function CartPage() {
  const lineItems = useCartItems();

  return (
    <Layout>
      <SEO title="Cart" />
      {lineItems.length < 1 ? <EmptyCart /> : <Cart />}
    </Layout>
  );
}
