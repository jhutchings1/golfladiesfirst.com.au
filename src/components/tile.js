import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';

const Tile = ({ title, slug, price, image }) => {
  const data = useGraphQL();

  const imageSrc = image || data.placeholderImage.childImageSharp.fluid;

  return (
    <Link to={`/product/${slug}`} className="flex flex-col overflow-hidden">
      <div className="relative h-0 overflow-hidden aspect-ratio-square">
        <div className="absolute inset-0 w-full h-full">
          <Image fluid={imageSrc} className="h-full" />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <h3 className="mt-2 leading-7">{title}</h3>
          <p className="mt-3 text-base leading-6 text-gray-500">
            Starting from:{' '}
            <span className="font-bold text-brand-pink">
              ${price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

Tile.propTypes = {
  image: PropTypes.object,
  price: PropTypes.number,
  slug: PropTypes.string,
  title: PropTypes.string,
};

Tile.defaultProps = {
  title: "Men's Down Jacket",
  price: '50',
};

export { Tile };
