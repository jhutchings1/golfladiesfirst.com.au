import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';

export function OurStory() {
  const { heroImage } = useGraphQL();
  return (
    <article className="relative bg-white">
      <div className="grid gap-5 py-5 lg:grid-cols-2">
        <GatsbyImage
          fluid={heroImage.childImageSharp.fluid}
          className="h-full"
        />
        <div className="px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8">
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
            <div className="grid gap-2 mt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, dolore distinctio saepe at, accusantium, tempora
                quibusdam ducimus iusto eum molestiae officia ex. Culpa quidem
                molestias tenetur ducimus placeat. Recusandae, harum!
              </p>
              <p>
                Natus inventore rerum expedita laborum animi omnis molestiae
                doloremque magnam necessitatibus dolorem, aspernatur repellat
                officia illo molestias veritatis sapiente, sint architecto
                praesentium unde id minima tempore neque nulla. Cumque, saepe?
              </p>
              <p>
                Eaque sit placeat earum soluta, cupiditate vero iste dolores
                optio dolore quod esse saepe sapiente nam quibusdam ullam
                minima, id quidem architecto, explicabo perferendis ducimus
                suscipit. Excepturi aut magni unde.
              </p>
              <p>
                Dolorem, officia est. Quia recusandae rem fugiat tenetur aliquid
                earum est corrupti, cupiditate porro ex accusantium voluptatum
                consequatur, illo itaque! Laboriosam error nemo minima illo
                mollitia officiis veritatis laudantium modi!
              </p>
              <p>
                Hic quidem aliquam sunt harum ratione velit voluptate id,
                explicabo, ad eaque quos cum facilis beatae numquam quam labore
                placeat modi deserunt temporibus? Tempore, iure id. Ducimus
                dolore quibusdam quisquam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
