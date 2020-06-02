/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import smoothScroll from 'smooth-scroll';

import { StoreContextProvider } from './src/context/store-context';
import 'typeface-inter';

import '@reach/dialog/styles.css';
import '@reach/menu-button/styles.css';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>
    <Helmet>
      <link
        rel="preconnect"
        href="//golfladiesfirst.myshopify.com"
        crossOrigin
      />
      <link rel="preconnect" href="//cdn.shopify.com" crossOrigin />
    </Helmet>
    {element}
  </StoreContextProvider>
);

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  smoothScroll('a[href*="#"]');
}

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
