import React from 'react';

import {
  Layout,
  SEO,
  Contact,
  NewsletterSignup,
  InstagramFeed,
  Map,
  OurStory,
  Team,
} from '../components';

export default function AboutPage() {
  return (
    <Layout hasHero={false}>
      <SEO title="About Us" />
      <OurStory />
      <Team />
      <Contact />
      <NewsletterSignup />
      <InstagramFeed />
      <Map />
    </Layout>
  );
}
