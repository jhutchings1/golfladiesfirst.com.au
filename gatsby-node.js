/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Query for all product handles
  const result = await graphql(`
    {
      allShopifyProduct {
        nodes {
          handle
        }
      }
    }
  `);
  // Iterate over all product handles and create a new page using a template
  const products = result.data.allShopifyProduct.nodes;
  products.forEach(product => {
    createPage({
      path: `/product/${product.handle}/`,
      component: path.resolve(`./src/templates/ProductPage/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables
        // via pageContext.
        handle: product.handle,
      },
    });
  });
};
