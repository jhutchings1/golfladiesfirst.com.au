import { useStoreContext } from './use-store-context';

export function useCheckout() {
  const {
    store: { checkout },
  } = useStoreContext();

  return checkout.webUrl;
}
