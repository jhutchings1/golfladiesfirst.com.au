import PropTypes from 'prop-types';
import React from 'react';

export function Thumbnail({ src, onClick }) {
  return (
    <button type="button" onClick={onClick} className="cursor-pointer">
      <img src={src.originalSrc} alt="" />
    </button>
  );
}

Thumbnail.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.object.isRequired,
};
