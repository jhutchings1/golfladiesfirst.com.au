import { useContext } from 'react';
import reduce from 'lodash/reduce';

import StoreContext from '../context/store-context';

export function useQuantity() {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const items = checkout ? checkout.lineItems : [];
  const total = reduce(items, (acc, item) => acc + item.quantity, 0);
  return [total !== 0, total];
}
