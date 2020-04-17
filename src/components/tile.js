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
      className="flex flex-col overflow-hidden"
    >
      <div className="relative h-0 overflow-hidden aspect-ratio-3/4">
        <div className="absolute inset-0 flex justify-center w-full h-full">
          <img
            ref={imgRef}
            data-src={imageSrc}
            onLoad={() => setImgLoaded(true)}
            alt={imageSrc.altText && imageSrc.altText}
            width={289}
            height={385}
            className="object-cover h-full"
          />
        </div>
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
