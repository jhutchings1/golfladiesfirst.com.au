import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Topbar } from './topbar';
import { Header } from './header';
import { Hero } from './hero';
import Footer from './footer';

const Layout = ({ children, hasHero }) => {
  return (
    <>
      <Helmet>
        <link
          rel="preconnect"
          href="//golfladiesfirst.myshopify.com"
          crossOrigin
        />
      </Helmet>
      <div className="flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white">
        <Topbar />
        <div className="flex flex-col flex-1">
          {hasHero && <Hero />}
          <Header />
          <main className="flex-1 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasHero: PropTypes.bool,
};

export { Layout };
