import React from 'react';

import {
  Layout,
  SEO,
  CollectionLatest,
  CollectionPromo,
  BrandsWeLove,
  OurStory,
  Contact,
  NewsletterSignup,
  InstagramFeed,
  Map,
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
      <NewsletterSignup />
      <InstagramFeed />
      <Map />
    </Layout>
  );
};

export default IndexPage;
