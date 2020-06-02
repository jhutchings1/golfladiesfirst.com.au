/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// Create product pages
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const products = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        nodes {
          id
          handle
        }
      }
    }
  `);

  products.data.allShopifyProduct.nodes.forEach((node) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve('./src/templates/product.js'),
      context: {
        productId: node.id,
      },
    });
  });

  // Create collection pages
  const collections = await graphql(`
    {
      allShopifyCollection {
        nodes {
          handle
          id
          title
        }
      }
    }
  `);

  collections.data.allShopifyCollection.nodes.forEach((node) => {
    createPage({
      path: `/collections/${node.handle}`,
      component: require.resolve('./src/templates/collection.js'),
      context: {
        id: node.id,
        handle: node.handle,
      },
    });
  });
};
