import React from 'react';

import { InstagramImages } from './instagram';

export function InstagramFeed() {
  return (
    <article className="py-6 bg-white">
      <h2 className="px-4 text-center h2">Keep social with us</h2>
      <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-6">
        <InstagramImages />
      </div>
    </article>
  );
}
