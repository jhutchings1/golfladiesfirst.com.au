import React from 'react';

import {
  Layout,
  SEO,
  BrandsWeLove,
  Contact,
  NewsletterSignup,
  InstagramFeed,
  Map,
} from '../components';
import { CollectionPromo } from '../components/collections';

export default function IndexPage() {
  return (
    <Layout hasHero>
      <SEO title="Home" />
      <CollectionPromo />
      <BrandsWeLove />
      <Contact />
      <NewsletterSignup />
      <InstagramFeed />
      <Map />
    </Layout>
  );
}
