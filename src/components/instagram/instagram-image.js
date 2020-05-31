import React from 'react';
import PropTypes from 'prop-types';

import { useLazyLoad } from '../../hooks';

export function InstagramImage({ post }) {
  const { ref, imgRef, isImgLoaded, handleImgLoaded, Spinner } = useLazyLoad();
  return (
    <a
      ref={ref}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-0 bg-gray-200 border border-transparent aspect-ratio-square focus:outline-none focus:shadow-outline-primary focus:border-primary-light"
    >
      <img
        ref={imgRef}
        onLoad={handleImgLoaded}
        data-src={post.src}
        srcSet={post.srcSet.toString()}
        alt={post.caption}
        className="absolute inset-0 object-cover w-full h-full"
      />
      {!isImgLoaded && (
        <div className="absolute inset-0 flex justify-center w-full h-full posts-center">
          <Spinner />
        </div>
      )}

      <div className="absolute inset-0 flex overflow-hidden font-sans text-sm text-white break-words whitespace-pre-wrap transition duration-200 ease-in-out opacity-0 hover:opacity-100 hover:bg-transparent-black-75">
        {isImgLoaded && (
          <div className="absolute top-0 right-0 mt-2 mr-1 pointer-events-none">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-transparent-white-75"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </div>
        )}
        <div className="relative mx-4 my-6 line-clamp">
          {isImgLoaded ? post.caption : 'Click to view on Instagram'}
        </div>
      </div>
    </a>
  );
}

InstagramImage.propTypes = {
  post: PropTypes.object,
};
