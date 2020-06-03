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
            address
            hours
            email
            phone {
              name
              numberDisplay
              numberFormatted
            }
            facebook
            instagram
          }
        }
        heroImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ladiesHats: file(relativePath: { eq: "collections/ladies-hats.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 506) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ladiesSkorts: file(
          relativePath: { eq: "collections/ladies-skorts.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "placeholder/shoe.png" }) {
          publicURL
          addToCartAlert: childImageSharp {
            fixed(width: 96) {
              src
            }
          }
        }
        allShopifyProductVariant {
          nodes {
            shopifyId
            image {
              originalSrc
            }
          }
        }
        allShopifyProduct(
          sort: { fields: updatedAt, order: DESC }
          filter: {
            availableForSale: { eq: true }
            variants: { elemMatch: { availableForSale: { eq: true } } }
          }
        ) {
          nodes {
            title
            handle
            availableForSale
            productType
            tags
            images {
              originalSrc
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
              }
            }
            variants {
              shopifyId
            }
          }
        }
        latestShirtsCollection: allShopifyProduct(
          sort: { fields: updatedAt, order: DESC }
          limit: 8
          filter: {
            availableForSale: { eq: true }
            productType: { eq: "Shirts" }
          }
        ) {
          nodes {
            title
            handle
            availableForSale
            images {
              originalSrc
            }
            images {
              originalSrc
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
              }
            }
            variants {
              shopifyId
            }
          }
        }
        allShopifyShopPolicy {
          nodes {
            body
            title
          }
        }
      }
    `
  );
  return data;
}
