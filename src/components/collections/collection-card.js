import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

export function CollectionCard({ children, image, to, width }) {
  const [columns, setColumns] = useState('lg:col-span-5');
  useEffect(() => {
    if (width === 'small') setColumns('lg:col-span-2');
    if (width === 'medium') setColumns('lg:col-span-3');
  }, [width]);
  return (
    <Link to={to} className={`${columns} relative bg-gray-50`}>
      <div className="absolute inset-0">
        <GatsbyImage fluid={image.childImageSharp.fluid} className="h-full" />
      </div>
      <div className="relative flex w-full bg-black bg-opacity-25 h-96">
        <div className="flex items-end justify-center w-full py-6 text-center">
          {children}
        </div>
      </div>
    </Link>
  );
}

CollectionCard.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  width: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
