import React from 'react';

import { Layout, SEO } from '../../components';
import { LadiesProductsHero, ProductWrapper } from '../../components/ladies';

export default function MensProductsPage() {
  return (
    <Layout theme="mens">
      <SEO title="Men's" />
      <LadiesProductsHero />
      <ProductWrapper />
    </Layout>
  );
}
