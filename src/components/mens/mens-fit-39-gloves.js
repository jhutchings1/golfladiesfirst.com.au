import React from 'react';

import { useGraphQL } from '../../hooks';
import { CollectionCard } from '../collections';

export function MensFit39Gloves() {
  const { mensFit39GlovesImage } = useGraphQL();
  return (
    <CollectionCard
      image={mensFit39GlovesImage}
      imgStyle={{ objectPosition: 'top' }}
      to="/collections/fit39-gloves-brand/?filter=mens"
      width="medium"
    >
      <span className="inline-flex shadow-sm">
        <div className="inline-flex items-center px-6 py-3 text-base font-bold leading-6 text-black uppercase transition duration-150 ease-in-out bg-white border border-transparent hover:text-gray-700 focus:outline-none focus:border-primary focus:shadow-outline-primary active:text-gray-800 active:bg-gray-50">
          Shop Fit 39 Gloves
        </div>
      </span>
    </CollectionCard>
  );
}
