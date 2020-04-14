import React from 'react';

import {
  Layout,
  SEO,
  CollectionLatest,
  CollectionPromo,
  BrandsWeLove,
  OurStory,
  Contact,
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
      <Contact />
    </Layout>
  );
};

export default IndexPage;
