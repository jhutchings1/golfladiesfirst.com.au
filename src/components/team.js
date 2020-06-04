import React from 'react';
import GatsbyImage from 'gatsby-image';

import { useGraphQL } from '../hooks';

export function Team() {
  const { heroImage } = useGraphQL();
  return (
    <article className="relative bg-white">
      <div className="w-full mx-auto max-w-7xl -mt-16">
        <GatsbyImage
          fluid={heroImage.childImageSharp.fluid}
          className="h-full relative z-10"
        />
        <div className="mb-8 mx-12 -mt-24 md:-mt-48 p-6 relative z-20 bg-white">
          <div className="border border-gray-700 p-8">
            <h2 className="h2 text-center">This is the team write-up</h2>
            <br />
            <div className="pb-12 grid gap-2 mt-5 text-gray-700">
              <p>
                At urna condimentum mattis pellentesque id nibh. Iaculis nunc
                sed augue lacus viverra vitae. Lobortis mattis aliquam faucibus
                purus in massa tempor nec. Aliquet eget sit amet tellus cras
                adipiscing enim eu. Nisi vitae suscipit tellus mauris a diam
                maecenas sed. Tristique sollicitudin nibh sit amet commodo nulla
                facilisi nullam. In tellus integer feugiat scelerisque varius
                morbi enim nunc. Nam libero justo laoreet sit amet cursus sit
                amet. Pretium viverra suspendisse potenti nullam ac. Sapien et
                ligula ullamcorper malesuada proin libero nunc consequat
                interdum. Nunc consequat interdum varius sit.
              </p>
              <br />
              <p>
                Ullamcorper dignissim cras tincidunt lobortis feugiat. Dui
                faucibus in ornare quam viverra orci sagittis eu. Sit amet
                consectetur adipiscing elit. Vitae nunc sed velit dignissim
                sodales ut. Pharetra vel turpis nunc eget lorem dolor. Ante
                metus dictum at tempor commodo. Nisi vitae suscipit tellus
                mauris. Turpis egestas maecenas pharetra convallis. Mauris
                pharetra et ultrices neque ornare aenean euismod elementum nisi.
                Enim neque volutpat ac tincidunt vitae semper quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
