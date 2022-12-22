const getAllCategories = async () => {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const request = await fetch(endpoint);
    const categories = request.json();
    return categories;
  } catch (error) {
    return undefined;
  }
};

export { getAllCategories };
