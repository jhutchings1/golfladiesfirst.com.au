/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import PropTypes from 'prop-types';
import React from 'react';
import smoothScroll from 'smooth-scroll';

import { StoreContextProvider } from './src/context/store-context';
import 'typeface-inter';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
);

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  smoothScroll('a[href*="#"]');
}

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
