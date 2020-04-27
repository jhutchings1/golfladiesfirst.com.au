import React from 'react';

import { Layout, SEO, BrandsWeLove } from '../../components';
import {
  LadiesHero,
  LadiesGregNorman,
  LadiesHats,
  LadiesSkorts,
  LadiesAccessories,
} from '../../components/ladies';

export default function LadiesPage() {
  return (
    <Layout theme="ladies">
      <SEO title="Ladies" />
      <LadiesHero />
      <div className="grid w-full grid-cols-1 row-gap-6 col-gap-4 px-4 py-12 mx-auto bg-white sm:px-6 lg:px-8 lg:grid-cols-5 max-w-7xl">
        <LadiesGregNorman />
        <LadiesHats />
        <LadiesSkorts />
        <LadiesAccessories />
        <LadiesHats />
      </div>
      <BrandsWeLove />
    </Layout>
  );
}
