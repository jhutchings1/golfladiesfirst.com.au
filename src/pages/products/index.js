import React from 'react';

import { Layout, SEO } from '../../components';
import { LadiesProductsHero, ProductWrapper } from '../../components/ladies';

export default function LadiesProductsPage() {
  return (
    <Layout>
      <SEO title="All Products" />
      <LadiesProductsHero />
      <ProductWrapper />
    </Layout>
  );
}
