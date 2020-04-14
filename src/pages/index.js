import React from 'react';

import {
  Layout,
  SEO,
  CollectionLatest,
  CollectionPromo,
} from '../components';

import { useGraphQL } from '../hooks';

const IndexPage = () => {
  const {
    allShopifyProduct: { nodes: products },
  } = useGraphQL();

  return (
    <Layout hasHero>
      <SEO title="Home" />
      <CollectionLatest />
      <CollectionPromo />
    </Layout>
  );
};

export default IndexPage;
