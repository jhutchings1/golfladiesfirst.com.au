import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import Spinner from 'react-svg-spinner';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config.js';
import { useGraphQL } from '../hooks';

const fullConfig = resolveConfig(tailwindConfig);

const Tile = ({ title, slug, price, image }) => {
  const { placeholderImage } = useGraphQL();
  const [imgLoaded, setImgLoaded] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const imgRef = useRef(null);
  const imageSrc = image ? image.originalSrc : placeholderImage.publicURL;

  useEffect(() => {
    if (inView) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, [inView]);

  return (
    <Link
      ref={ref}
      to={`/products/${slug}`}
      className="flex flex-col max-w-sm py-3 mx-auto transition duration-150 ease-in-out transform bg-white rounded-md hover:bg-gray-50 hover:shadow hover:-translate-y-px"
    >
      <div className="relative h-64">
        <img
          ref={imgRef}
          data-src={imageSrc}
          onLoad={() => setImgLoaded(true)}
          alt={imageSrc.altText ? imageSrc.altText : ''}
          className="object-contain w-full h-full"
        />
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
            <Spinner
              size={fullConfig.theme.spacing[8]}
              color={fullConfig.theme.colors.brand.pink}
              thickness={3}
            />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mt-2">{title}</h3>
        <p className="mt-3 text-base leading-6 text-gray-500">
          Starting from:{' '}
          <span className="font-bold text-brand-pink">${price.toFixed(2)}</span>
        </p>
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
