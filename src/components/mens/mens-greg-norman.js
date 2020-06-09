import React from 'react';

import { useGraphQL } from '../../hooks';
import { CollectionCard } from '../collections';

export function MensGregNorman() {
  const { mensGregNormanImage } = useGraphQL();
  return (
    <CollectionCard
      image={mensGregNormanImage}
      imgStyle={{ objectPosition: 'top' }}
      to="/collections/greg-norman/"
      width="large"
    >
      <div className="flex items-end justify-center w-2/3 py-12 mr-auto text-center text-white h2">
        Shop <br />
        Greg Norman
      </div>
    </CollectionCard>
  );
}
