import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import GatsbyImage from 'gatsby-image';

export function CollectionCard({ image, width, children }) {
  const [columns, setColumns] = useState('lg:col-span-5');
  useEffect(() => {
    if (width === 'small') setColumns('lg:col-span-2');
    if (width === 'medium') setColumns('lg:col-span-3');
  }, [width]);
  return (
    <div className={`${columns} relative bg-gray-50`}>
      <div className="absolute inset-0">
        <GatsbyImage fluid={image.childImageSharp.fluid} className="h-full" />
      </div>
      <div className="relative flex w-full h-96 bg-transparent-black-25">
        <div className="flex items-end justify-center w-full py-6 text-center">
          {children}
        </div>
      </div>
    </div>
  );
}

CollectionCard.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOf('small', 'medium', 'large').isRequired,
  image: PropTypes.object.isRequired,
};
