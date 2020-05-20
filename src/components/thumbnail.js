import PropTypes from 'prop-types';
import React from 'react';

import { useLazyLoad, useGraphQL } from '../hooks';

export function Thumbnail({ src, onClick }) {
  const { placeholderImage } = useGraphQL();
  const { ref, imgRef, isImgLoaded, handleImgLoaded, Spinner } = useLazyLoad();
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className="relative h-0 overflow-hidden bg-white cursor-pointer aspect-ratio-square"
    >
      <img
        ref={imgRef}
        onLoad={handleImgLoaded}
        data-src={src?.originalSrc || placeholderImage.publicURL}
        alt=""
        className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50"
      />
      {!isImgLoaded && <Spinner />}
    </button>
  );
}

Thumbnail.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.object.isRequired,
};
