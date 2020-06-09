import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Topbar } from './topbar';
import { Header } from './header';
import { Hero } from './hero';
import { FixedButtons } from './fixed-buttons';
import { Footer } from './footer';

export function Layout({ children, hasHero, theme = '' }) {
  // Set theme
  useEffect(() => {
    // Check if window object exists
    if (typeof window !== 'undefined') {
      const element = window.document.body;
      // Append theme data-attribute to body element — defaults to ladies
      element.dataset.theme = theme.toLowerCase();
    }
  }, [theme]);

  return (
    <div
      id="top"
      className="flex flex-col min-h-screen font-sans antialiased text-black"
    >
      <Topbar />
      <div className="flex flex-col flex-1">
        {hasHero && <Hero />}
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <FixedButtons theme={theme} />
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasHero: PropTypes.bool,
  theme: PropTypes.oneOf(['ladies', 'mens']),
};
