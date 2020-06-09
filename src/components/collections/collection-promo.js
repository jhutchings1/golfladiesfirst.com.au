import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

export function CollectionPromo() {
  const { shopLadiesImage, shopMensImage } = useGraphQL();
  return (
    <article className="relative bg-white">
      <div className="grid w-full max-w-lg gap-4 py-12 mx-auto sm:py-16 sm:max-w-7xl md:grid-cols-2">
        <Card
          fluid={shopLadiesImage.childImageSharp.fluid}
          imgStyle={{ objectPosition: 'top' }}
          heading={
            <>
              <span className="text-4xl">Shop ladies and </span>
              <br />
              <span className="text-4xl">get 20% off </span>
              <br />
              <span className="leading-7">head to toe looks</span>
            </>
          }
          slug="/collections/ladies/"
          linkLabel="Shop Ladies"
        />
        <Card
          fluid={shopMensImage.childImageSharp.fluid}
          heading={
            <>
              <span className="text-4xl">Shop mens and </span>
              <br />
              <span className="text-4xl">get 20% off </span>
              <br />
              <span className="leading-7">head to toe looks</span>
            </>
          }
          slug="/collections/mens/"
          linkLabel="Shop Mens"
        />
      </div>
    </article>
  );
}

function Card({ fluid, imgStyle, heading, slug, linkLabel }) {
  return (
    <div className="relative">
      <div className="h-0 aspect-ratio-square">
        <div className="absolute inset-0 w-full h-full">
          <GatsbyImage fluid={fluid} imgStyle={imgStyle} className="h-full" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-end">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient"
        />
        <div className="relative flex-col items-center flex-1 p-8 text-center text-white">
          <h2 className="h2">{heading}</h2>
          <Link
            to={slug}
            className="inline-block px-8 py-2 mt-4 text-sm font-bold tracking-wider uppercase transition duration-150 ease-in-out border border-brand-pink bg-brand-pink hover:bg-white hover:text-brand-pink hover:border-white focus:outline-none focus:shadow-outline-primary"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  fluid: PropTypes.object.isRequired,
  heading: PropTypes.node.isRequired,
  imgStyle: PropTypes.object,
  slug: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};
