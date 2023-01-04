const CART_ITEMS = 'cart_items';

export const getItemsCart = () =>
  JSON.parse(localStorage.getItem(CART_ITEMS)) || [];

export const saveNewItemCart = (newItem) => {
  const items = getItemsCart();
  return localStorage.setItem(CART_ITEMS, JSON.stringify([...items, newItem]));
};

export const deleteItemCart = (id) => {
  const items = getItemsCart();
  const itemsFiltered = items.filter(({ id: idProduct }) => idProduct !== id);
  const updateItems = saveNewItemCart(itemsFiltered);
  return updateItems;
};
