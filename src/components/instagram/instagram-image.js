import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import { Spinner } from '../spinner';

export function InstagramImage({ item }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const imgRef = useRef(null);

  useEffect(() => {
    if (inView && item.media_url) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, [inView, item.media_url]);

  return (
    <a
      ref={ref}
      href={item && item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-0 bg-gray-200 aspect-ratio-square"
    >
      <img
        onLoad={() => setImgLoaded(true)}
        ref={imgRef}
        data-src={item && item.media_url}
        alt={imgLoaded && item ? item.caption : ''}
        className="absolute inset-0 object-cover w-full h-full"
      />
      {!imgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <Spinner />
        </div>
      )}

      <div className="absolute inset-0 flex overflow-hidden font-sans text-sm text-white break-words whitespace-pre-wrap transition duration-200 ease-in-out opacity-0 hover:opacity-100 hover:bg-transparent-black-75">
        {imgLoaded && (
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
          {item && item.caption && imgLoaded
            ? item.caption
            : 'Click to view on Instagram'}
        </div>
      </div>
    </a>
  );
}

InstagramImage.propTypes = {
  item: PropTypes.object,
};
