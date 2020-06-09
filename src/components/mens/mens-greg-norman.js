import React from 'react';

import { useGraphQL } from '../../hooks';
import { CollectionCard } from '../collections';

export function MensGregNorman() {
  const { mensGregNormanImage } = useGraphQL();
  return (
    <CollectionCard
      image={mensGregNormanImage}
      imgStyle={{ objectPosition: 'top' }}
      to="/collections/greg-norman/?filter=mens"
      width="large"
    >
      <div className="flex flex-col items-center lg:mr-auto lg:w-2/5">
        <span className="inline-flex mt-6 shadow-sm">
          <div className="inline-flex items-center px-6 py-3 text-base font-bold leading-6 text-black uppercase transition duration-150 ease-in-out bg-white border border-transparent hover:text-gray-700 focus:outline-none focus:border-primary focus:shadow-outline-primary active:text-gray-800 active:bg-gray-50">
            Shop Greg Norman
          </div>
        </span>
      </div>
    </CollectionCard>
  );
}
