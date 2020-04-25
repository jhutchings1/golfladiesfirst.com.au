import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Topbar } from './topbar';
import { Header } from './header';
import { Hero } from './hero';
import Footer from './footer';

const Layout = ({ children, hasHero, theme = 'ladies' }) => {
  // Set theme
  useEffect(() => {
    // Check if window object exists
    if (typeof window !== 'undefined') {
      const element = window.document.body;
      // Append theme data-attribute to body element — defaults to ladies
      element.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <>
      <Helmet>
        <link
          rel="preconnect"
          href="//golfladiesfirst.myshopify.com"
          crossOrigin
        />
      </Helmet>
      <div className="flex flex-col min-h-screen font-sans antialiased text-gray-700">
        <Topbar />
        <div className="flex flex-col flex-1">
          {hasHero && <Hero />}
          <Header />
          <main className="flex-1 bg-gray-50">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasHero: PropTypes.bool,
  theme: PropTypes.oneOf(['ladies', 'mens']),
};

export { Layout };
