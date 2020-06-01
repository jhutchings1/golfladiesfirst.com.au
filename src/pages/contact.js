import React from 'react';

import {
  Layout,
  SEO,
  Contact,
  NewsletterSignup,
  InstagramFeed,
  Map,
} from '../components';
import { CollectionLatest } from '../components/collections';

export default function ContactPage() {
  return (
    <Layout hasHero={false}>
      <SEO title="Home" />
      <Contact />
      <CollectionLatest />
      <NewsletterSignup />
      <InstagramFeed />
      <Map />
    </Layout>
  );
}
