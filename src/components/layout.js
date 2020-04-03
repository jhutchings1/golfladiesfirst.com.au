import React from 'react';
import PropTypes from 'prop-types';

import ContextProvider from '../provider/context-provider';
// import { GlobalStyle } from '../utils/styles';
import Navigation from './navigation';
import { useGraphQL } from '../hooks/use-graphql';

const Layout = ({ children }) => {
  const { site } = useGraphQL();
  return (
    <ContextProvider>
      {/* <GlobalStyle /> */}
      <div className="min-h-screen">
        <Navigation siteTitle={site.siteMetadata.title} />
        <main>{children}</main>
      </div>
    </ContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
