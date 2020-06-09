import React from 'react';

import { Layout, SEO, ProductWrapper } from '../../components';
import { LadiesProductsHero } from '../../components/ladies';

export default function MensProductsPage() {
  return (
    <Layout theme="mens">
      <SEO title="Men's" />
      <LadiesProductsHero />
      <ProductWrapper />
    </Layout>
  );
}
