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

const IndexPage = () => {
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
