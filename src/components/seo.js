import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

import { useGraphQL } from '../hooks';

export function SEO({ description, image, type, lang, meta, title }) {
  const {
    site: { siteMetadata },
    ogImage,
  } = useGraphQL();

  const { pathname } = useLocation();

  const metaDescription = description || siteMetadata.description;
  const metaType = type || 'website';
  const metaUrl = `${siteMetadata.siteUrl}${pathname}`;
  const metaImage = image || `${siteMetadata.siteUrl}${ogImage.publicURL}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: metaType,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
