import React from 'react';

import { Layout, SEO, BrandsWeLove } from '../../components';
import {
  MensHero,
  MensGregNorman,
  MensBermudaSands,
  MensTravisMatthews,
  MensFit39Gloves,
  MensCutterAndBuck,
} from '../../components/mens';

export default function MensPage() {
  return (
    <Layout theme="mens">
      <SEO title="Mens" />
      <MensHero />
      <div className="grid w-full grid-cols-1 row-gap-6 col-gap-4 px-4 py-12 mx-auto bg-white sm:px-6 lg:px-8 lg:grid-cols-5 max-w-7xl">
        <MensGregNorman />
        <MensTravisMatthews />
        <MensBermudaSands />
        <MensFit39Gloves />
        <MensCutterAndBuck />
      </div>
      <BrandsWeLove />
    </Layout>
  );
}
