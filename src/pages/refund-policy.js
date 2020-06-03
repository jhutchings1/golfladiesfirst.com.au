import React from 'react';

import { Layout, SEO } from '../components';
import { useGraphQL } from '../hooks/use-graphql';

export default function RefundPolicy() {
  const { allShopifyShopPolicy } = useGraphQL();
  return (
    <Layout>
      <SEO title="Refund Policy" />
      <article className="w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="h2">{allShopifyShopPolicy.nodes[0].title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: allShopifyShopPolicy.nodes[0].body,
            }}
            className="mt-6 prose"
          />
        </div>
      </article>
    </Layout>
  );
}
