import React from 'react';

import { Layout, SEO } from '../components';
import { Hero, ProductWrapper } from '../components/ladies';

export default function LadiesPage() {
  return (
    <Layout theme="ladies">
      <SEO title="Ladies" />
      <Hero />
      <ProductWrapper />
    </Layout>
  );
}
