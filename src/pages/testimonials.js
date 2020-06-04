import React from 'react';
import {
  Layout,
  SEO,
  NewsletterSignup,
  InstagramFeed,
  Map,
} from '../components';
import {
  Hero,
  PullQuote,
  FirstRow,
  SecondRow,
} from '../components/testimonials';

export default function TestimonialsPage() {
  return (
    <Layout>
      <SEO title="Testimonials" />
      <Hero />
      <PullQuote />
      <FirstRow />
      <SecondRow />
      <NewsletterSignup />
      <InstagramFeed />
      <Map />
    </Layout>
  );
}
