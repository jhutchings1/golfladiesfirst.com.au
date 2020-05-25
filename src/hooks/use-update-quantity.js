import { useStoreContext } from './use-store-context';

export function useUpdateQuantity() {
  const {
    store: { checkout, client },
    setStore,
  } = useStoreContext();

  async function updateQuantity(id, quantity) {
    setStore((prevState) => {
      return { ...prevState };
    });

    const checkoutId = checkout.id;
    const lineItemsToUpdate = [{ id, quantity: parseInt(quantity, 10) }];

    const updateItems = await client.checkout.updateLineItems(
      checkoutId,
      lineItemsToUpdate
    );

    setStore((prevState) => {
      return { ...prevState, checkout: updateItems };
    });
  }

  return updateQuantity;
}
