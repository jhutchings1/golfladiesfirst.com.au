import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';

export function Team() {
  const { heroImage } = useGraphQL();
  return (
    <article className="relative bg-white">
      <div className="w-full mx-auto max-w-7xl">
        <GatsbyImage
          fluid={heroImage.childImageSharp.fluid}
          className="relative max-h-96"
        />
        <div className="relative w-full max-w-3xl mx-auto -mt-48">
          <div className="p-6 mx-4 bg-white sm:mx-6">
            <div className="px-8 py-12 border border-gray-400">
              <h2 className="text-center h2">This is the team write-up</h2>
              <div className="pb-12 mt-8 prose">
                <p>
                  At urna condimentum mattis pellentesque id nibh. Iaculis nunc
                  sed augue lacus viverra vitae. Lobortis mattis aliquam
                  faucibus purus in massa tempor nec. Aliquet eget sit amet
                  tellus cras adipiscing enim eu. Nisi vitae suscipit tellus
                  mauris a diam maecenas sed. Tristique sollicitudin nibh sit
                  amet commodo nulla facilisi nullam. In tellus integer feugiat
                  scelerisque varius morbi enim nunc. Nam libero justo laoreet
                  sit amet cursus sit amet. Pretium viverra suspendisse potenti
                  nullam ac. Sapien et ligula ullamcorper malesuada proin libero
                  nunc consequat interdum. Nunc consequat interdum varius sit.
                </p>
                <p>
                  Ullamcorper dignissim cras tincidunt lobortis feugiat. Dui
                  faucibus in ornare quam viverra orci sagittis eu. Sit amet
                  consectetur adipiscing elit. Vitae nunc sed velit dignissim
                  sodales ut. Pharetra vel turpis nunc eget lorem dolor. Ante
                  metus dictum at tempor commodo. Nisi vitae suscipit tellus
                  mauris. Turpis egestas maecenas pharetra convallis. Mauris
                  pharetra et ultrices neque ornare aenean euismod elementum
                  nisi. Enim neque volutpat ac tincidunt vitae semper quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
