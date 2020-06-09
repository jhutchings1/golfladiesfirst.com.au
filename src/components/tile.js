import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { useGraphQL, useLazyLoad } from '../hooks';
import { resizeShopifyImage } from '../utilities';

export function Tile({
  title,
  slug,
  price,
  image,
  constantPrice,
  available,
  onSale = false,
}) {
  const { placeholderImage } = useGraphQL();

  const imageSrc = image
    ? image.originalSrc &&
      resizeShopifyImage({ url: image.originalSrc, width: 300 })
    : placeholderImage.publicURL;

  const { ref, imgRef, isImgLoaded, handleImgLoaded, Spinner } = useLazyLoad();
  return (
    <Link
      ref={ref}
      to={`/products/${slug}`}
      className={`${
        !available && 'opacity-50'
      } relative flex flex-col w-full max-w-sm pb-3 mx-auto overflow-hidden transition duration-150 ease-in-out transform bg-white h-96 group focus:outline-none focus:shadow-outline-primary focus:z-10`}
    >
      <div className="relative h-64">
        <img
          ref={imgRef}
          onLoad={handleImgLoaded}
          data-src={imageSrc}
          alt=""
          className="object-contain w-full h-full duration-500 ease-in-out transform group-hover:scale-110 group-focus:scale-110"
        />
        {!isImgLoaded && <Spinner />}
        {onSale && (
          <div className="absolute top-0 left-0 -mt-1 transform translate-y-full -translate-x-9">
            <div className="px-12 py-1 font-bold text-white uppercase transform -rotate-45 bg-primary">
              On Sale
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mt-2 line-clamp">{title}</h3>
        <p className="mt-3 text-base leading-6 text-gray-500">
          {!constantPrice && `Starting from: `}
          <span className="font-bold text-primary">
            {available ? (
              <>
                <small className="font-normal">AUD</small> ${price.toFixed(2)}
              </>
            ) : (
              'Sold Out'
            )}
          </span>
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
  constantPrice: PropTypes.bool,
  available: PropTypes.bool,
  onSale: PropTypes.bool,
};
