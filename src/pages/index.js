import React from 'react';

import {
  Layout,
  SEO,
  CollectionLatest,
  CollectionPromo,
  BrandsWeLove,
  OurStory,
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
      <BrandsWeLove />
      <OurStory />
    </Layout>
  );
};

export default IndexPage;
