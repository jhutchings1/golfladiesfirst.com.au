import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

export function CollectionCard({ children, image, imgStyle, to, width }) {
  const columns = {
    small: 'lg:col-span-2',
    medium: 'lg:col-span-3',
    large: 'lg:col-span-5',
  };

  return (
    <Link to={to} className={`${columns[width]} relative`}>
      <div className="absolute inset-0">
        <GatsbyImage
          fluid={image.childImageSharp.fluid}
          imgStyle={imgStyle}
          className="h-full"
        />
      </div>
      <div className="relative flex w-full h-96">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient"
        />
        <div className="relative flex items-end justify-center w-full py-6 text-center">
          {children}
        </div>
      </div>
    </Link>
  );
}

CollectionCard.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  imgStyle: PropTypes.object,
  to: PropTypes.string.isRequired,
  width: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
