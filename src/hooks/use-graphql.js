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
        # Site Metadata
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
        # Home page queries
        heroImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        shopLadiesImage: file(relativePath: { eq: "shop-ladies.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        shopMensImage: file(relativePath: { eq: "shop-mens.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # Ladies Collection page queries
        ladiesCollectionHeroImage: file(
          relativePath: { eq: "golf-course.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ladiesGregNormanImage: file(
          relativePath: { eq: "collections/ladies/greg-norman.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ladiesBermudaSandsImage: file(
          relativePath: { eq: "collections/ladies/bermuda-sands.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ladiesNivoImage: file(
          relativePath: { eq: "collections/ladies/nivo.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ladiesDailySportsImage: file(
          relativePath: { eq: "collections/ladies/daily-sports.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ladiesJamieSadockImage: file(
          relativePath: { eq: "collections/ladies/jamie-sadock.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # Mens Collection page queries
        mensCollectionHeroImage: file(relativePath: { eq: "golf-course.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mensGregNormanImage: file(
          relativePath: { eq: "collections/mens/greg-norman.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mensTravisMatthewsImage: file(
          relativePath: { eq: "collections/mens/travis-matthews.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mensBermudaSandsImage: file(
          relativePath: { eq: "collections/mens/bermuda-sands.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mensFit39GlovesImage: file(
          relativePath: { eq: "collections/mens/fit39-gloves.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mensCutterAndBuckImage: file(
          relativePath: { eq: "collections/mens/cutter-and-buck.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # Product page queries
        placeholderImage: file(relativePath: { eq: "placeholder.jpg" }) {
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
        # Carousel queries
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
