import React from 'react';

import { InstagramImages } from './instagram';

export function InstagramFeed() {
  return (
    <article className="w-full px-4 pt-16 pb-6 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8">
      <h2 className="px-4 text-center h2">Keep social with us</h2>
      <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
        <InstagramImages />
      </div>
    </article>
  );
}
