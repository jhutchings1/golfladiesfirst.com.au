import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO } from '../components';

export default function GolfTipsTemplate({ data: { shopifyArticle } }) {
  return (
    <Layout>
      <SEO title={shopifyArticle.title} description={shopifyArticle.excerpt} />
      <article className="w-full px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="h2">{shopifyArticle.title}</h1>
            <p className="mt-2 text-gray-500">
              Published on <time>{shopifyArticle.publishedAt}</time> by{' '}
              {shopifyArticle.author.name}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: shopifyArticle.contentHtml,
            }}
            className="mt-6 prose"
          />
        </div>
      </article>
    </Layout>
  );
}

GolfTipsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($id: String!) {
    shopifyArticle(id: { eq: $id }) {
      author {
        name
      }
      contentHtml
      excerpt
      title
      image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      publishedAt(formatString: "DD MMMM, YYYY")
    }
  }
`;
