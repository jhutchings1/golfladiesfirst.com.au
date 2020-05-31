import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { useInstagram } from '../../hooks';
import { InstagramImage } from './instagram-image';
import { Spinner } from '../spinner';

export function InstagramImages({ imagesToShow = 6 }) {
  const posts = useInstagram();

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="//graph.instagram.com" crossOrigin />
      </Helmet>
      {posts.length
        ? posts
            .slice(0, imagesToShow)
            .map((post) => <InstagramImage key={post.id} post={post} />)
        : Array(imagesToShow)
            .fill('')
            .map((_, i) => (
              <div key={i} className="relative h-0 aspect-ratio-square">
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                  <Spinner />
                </div>
              </div>
            ))}
    </>
  );
}

InstagramImages.propTypes = {
  imagesToShow: PropTypes.number,
};
