/**
 * Custom hook that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';

export function useGraphQL() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        heroImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "placeholder/shoe.png" }) {
          publicURL
        }
        allShopifyProductVariant {
          nodes {
            shopifyId
            image {
              altText
              originalSrc
            }
          }
        }
        allShopifyProduct(sort: { fields: updatedAt, order: DESC }) {
          nodes {
            title
            handle
            images {
              altText
              originalSrc
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants {
              shopifyId
            }
          }
        }
        allLatestShopifyProduct: allShopifyProduct(
          sort: { fields: updatedAt, order: DESC }
          limit: 4
        ) {
          nodes {
            title
            handle
            images {
              originalSrc
              altText
            }
            images {
              altText
              originalSrc
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants {
              shopifyId
            }
          }
        }
      }
    `
  );
  return data;
}
