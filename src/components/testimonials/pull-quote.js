import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../../hooks';

export function PullQuote() {
  const { heroImage } = useGraphQL();
  return (
    <div className="w-full px-4 py-8 mx-auto mt-2 overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <div className="relative grid md:grid-cols-12">
        <div className="lg:absolute lg:inset-0 lg:w-1/2">
          <GatsbyImage
            fluid={heroImage.childImageSharp.fluid}
            className="h-full"
          />
        </div>
        <div className="lg:col-start-6 lg:col-span-7">
          <article className="relative w-full max-w-lg px-16 py-12 mx-auto -mt-24 bg-white lg:mx-0 lg:my-10">
            <svg
              className="absolute w-8 h-8 text-primary top-8 left-5"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="italic">
              <span className="sr-only">“</span>Here is a photo of our team on
              the champagne hole. The tops looked great and we won Best Dressed
              team!! We also won this the year beforewith the other tops I got
              from you which were also Corsican. Very happy and many ladies
              commented on how great we looked”
            </blockquote>
            <p className="mt-4 font-bold">Thanks again, Colleen</p>
          </article>
        </div>
      </div>
    </div>
  );
}
