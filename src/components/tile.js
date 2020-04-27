import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';

import { useGraphQL } from '../hooks';
import { resizeShopifyImage } from '../utilities';
import { Spinner } from './spinner';

export function Tile({ title, slug, price, image }) {
  const { placeholderImage } = useGraphQL();
  const [imgLoaded, setImgLoaded] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const imgRef = useRef(null);
  const imageSrc = image
    ? image.originalSrc &&
      resizeShopifyImage({ url: image.originalSrc, width: 300 })
    : placeholderImage.publicURL;

  useEffect(() => {
    if (inView) {
      imgRef.current.src = imgRef.current.dataset.src;
    }
  }, [inView]);

  return (
    <Link
      ref={ref}
      to={`/products/${slug}`}
      className="flex flex-col max-w-sm py-3 mx-auto overflow-hidden transition duration-150 ease-in-out transform bg-white group focus:outline-none focus:shadow-outline-pink"
    >
      <div className="relative h-64">
        <img
          ref={imgRef}
          data-src={imageSrc}
          onLoad={() => setImgLoaded(true)}
          alt=""
          className="object-contain w-full h-full duration-500 ease-in-out transform group-hover:scale-110 group-focus:scale-110"
        />
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
            <Spinner />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mt-2 line-clamp">{title}</h3>
        <p className="mt-3 text-base leading-6 text-gray-500">
          Starting from:{' '}
          <span className="font-bold text-primary">${price.toFixed(2)}</span>
        </p>
      </div>
    </Link>
  );
}

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
