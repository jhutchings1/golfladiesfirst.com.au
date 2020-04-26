import React from 'react';

import { Layout, SEO } from '../../components';
import { Hero, ProductWrapper } from '../../components/ladies';

export default function MensPage() {
  return (
    <Layout theme="mens">
      <SEO title="Men's" />
      <Hero />
      <ProductWrapper />
    </Layout>
  );
}
