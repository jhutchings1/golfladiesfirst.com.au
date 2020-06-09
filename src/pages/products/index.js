import React from 'react';

import { Layout, SEO, ProductWrapper } from '../../components';
import { LadiesProductsHero } from '../../components/ladies';

export default function LadiesProductsPage() {
  return (
    <Layout>
      <SEO title="All Products" />
      <LadiesProductsHero />
      <ProductWrapper />
    </Layout>
  );
}
