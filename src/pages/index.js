import React from 'react';

import {
  Layout,
  SEO,
  BrandsWeLove,
  OurStory,
  Contact,
  NewsletterSignup,
  // InstagramFeed,
  Map,
} from '../components';
import { CollectionLatest, CollectionPromo } from '../components/collections';

export default function IndexPage() {
  return (
    <Layout hasHero>
      <SEO title="Home" />
      <CollectionLatest />
      <CollectionPromo />
      <BrandsWeLove />
      <OurStory />
      <Contact />
      <NewsletterSignup />
      {/* <InstagramFeed /> */}
      <Map />
    </Layout>
  );
}
