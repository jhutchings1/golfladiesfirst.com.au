import React from 'react';

import { Layout, SEO } from '../components';
import { Hero, ProductWrapper } from '../components/ladies';

export default function WomenPage() {
  return (
    <Layout>
      <SEO title="Ladies" />
      <Hero />
      <ProductWrapper />
    </Layout>
  );
}
