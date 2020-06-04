import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';

export function OurStory() {
  const {
    heroImage,
    site: {
      siteMetadata: { title },
    },
  } = useGraphQL();
  return (
    <article className="relative bg-white">
      <div className="grid w-full gap-4 pb-16 mx-auto xl:pt-16 lg:grid-cols-2 max-w-7xl">
        <GatsbyImage
          fluid={heroImage.childImageSharp.fluid}
          className="h-full"
        />
        <div className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="h2">
              Our <br />
              story
            </h2>
            <div aria-hidden className="flex w-1/3 h-3 mt-6 overflow-hidden">
              <div className="w-1/2 bg-brand-pink">
                <div className="h-full transform -skew-x-12 bg-brand-pink" />
              </div>
              <div className="w-1/2 bg-brand-blue">
                <div className="h-full transform -skew-x-12 bg-brand-blue" />
              </div>
            </div>
            <div className="mt-5 space-y-2 text-gray-700">
              <p>
                Golf Ladies First — A one-stop ladies’ golf shop where you can
                be covered in golf from head to toe by a friendly, welcoming,
                family-based team.
              </p>
              <p>
                Based in Port Macquarie, N.S.W., Golf Ladies First is the
                brainchild of P.G.A. Professionals Gordon and Chantale McCallum.
                With over 30 years’ experience in Scotland, Germany and
                Australia they felt the need to give women in a male-dominated
                environment a friendly, comfortable atmosphere in which to
                involve themselves in Golf and the Pro Shop.
              </p>
              <p>
                To give Women Golfers the opportunity to ask questions, discuss
                their thoughts and experiences from the golf course with a team
                willing to be involved and understanding their needs.
              </p>
              <p>
                Their goals are to get more women playing golf on a regular
                basis, for women to enjoy golf on and around the golf course; to
                improve their game.
              </p>
              <p>
                Lastly and most importantly for women to look outstanding and
                play impressive golf — looking and feeling great is the key to
                great golf!
              </p>
              <span>
                <span className="inline-flex mt-6 shadow-sm">
                  <Link
                    to="/about/"
                    aria-label={`Read more about ${title}`}
                    className="inline-block px-8 py-2 text-sm font-bold tracking-wider text-center text-white uppercase transition duration-150 ease-in-out border border-primary bg-primary hover:bg-white hover:text-primary focus:outline-none focus:shadow-outline-primary"
                  >
                    Read more
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
