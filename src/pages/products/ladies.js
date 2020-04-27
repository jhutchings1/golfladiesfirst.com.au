import React from 'react';

import { Layout, SEO } from '../../components';
import { LadiesProductsHero, ProductWrapper } from '../../components/ladies';

export default function LadiesProductsPage() {
  return (
    <Layout theme="ladies">
      <SEO title="Ladies" />
      <LadiesProductsHero />
      <ProductWrapper />
    </Layout>
  );
}
