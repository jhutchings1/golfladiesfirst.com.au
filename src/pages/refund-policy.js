import React from 'react';

import { Layout, SEO } from '../components';
import { useGraphQL } from '../hooks/use-graphql';

export default function RefundPolicy() {
  const { allShopifyShopPolicy } = useGraphQL();
  return (
    <Layout>
      <SEO title="Refund Policy" />
      <article className="w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="h2">{allShopifyShopPolicy.nodes[0].title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: allShopifyShopPolicy.nodes[0].body,
          }}
          className="grid gap-4 mt-6"
        />
      </article>
    </Layout>
  );
}
