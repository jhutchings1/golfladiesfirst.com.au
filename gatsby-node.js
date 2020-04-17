/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        nodes {
          id
          handle
        }
      }
    }
  `);

  result.data.allShopifyProduct.nodes.forEach((node) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        productId: node.id,
      },
    });
  });
};
