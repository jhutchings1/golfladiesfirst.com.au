import React from 'react';

import { Layout, SEO } from '../components';
import { Cart } from '../components/cart';

export default function CartPage() {
  return (
    <Layout>
      <SEO title="Cart" />
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Cart />
      </div>
    </Layout>
  );
}
