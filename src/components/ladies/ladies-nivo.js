import React from 'react';

import { useGraphQL } from '../../hooks';
import { CollectionCard } from '../collections';

export function LadiesNivo() {
  const { ladiesNivoImage } = useGraphQL();
  return (
    <CollectionCard
      image={ladiesNivoImage}
      imgStyle={{ objectPosition: 'top' }}
      to="/collections/nivo/?filter=ladies"
      width="medium"
    >
      <span className="inline-flex shadow-sm">
        <div className="inline-flex items-center px-6 py-3 text-base font-bold leading-6 text-black uppercase transition duration-150 ease-in-out bg-white border border-transparent hover:text-gray-700 focus:outline-none focus:border-primary focus:shadow-outline-primary active:text-gray-800 active:bg-gray-50">
          Shop Nivo
        </div>
      </span>
    </CollectionCard>
  );
}
