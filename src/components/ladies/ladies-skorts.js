import React from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../../hooks';
import { CollectionCard } from '../collections';

export function LadiesSkorts() {
  const { ladiesSkorts } = useGraphQL();
  return (
    <CollectionCard image={ladiesSkorts} width="medium">
      <span className="inline-flex shadow-sm">
        <Link
          to="/products/ladies/"
          className="inline-flex items-center px-6 py-3 text-base font-bold leading-6 text-black uppercase transition duration-150 ease-in-out bg-white border border-transparent hover:text-gray-700 focus:outline-none focus:border-primary focus:shadow-outline-pink active:text-gray-800 active:bg-gray-50"
        >
          Shop skorts
        </Link>
      </span>
    </CollectionCard>
  );
}
