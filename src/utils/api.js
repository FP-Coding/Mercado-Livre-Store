const getAllCategories = async () => {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const request = await fetch(endpoint);
    const categories = request.json();
    return categories;
  } catch (error) {
    return [];
  }
};

const getItensByQuery = async (QueryText) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${QueryText}`;
    const request = await fetch(endpoint);
    const { results } = await request.json();
    return results;
  } catch (error) {
    return [];
  }
};

const getItensByIdCategory = async (id) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
    const request = await fetch(endpoint);
    const { results } = await request.json();
    return results;
  } catch (error) {
    return [];
  }
};

const getItensByIdCategoryAndQuery = async (id, query) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`;
    const request = await fetch(endpoint);
    const { results } = await request.json();
    return results;
  } catch (error) {
    return [];
  }
};

const getItensById = async (id) => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const request = await fetch(endpoint);
    const product = await request.json();
    return product;
  } catch (error) {
    return undefined;
  }
};

export {
  getAllCategories,
  getItensByQuery,
  getItensByIdCategory,
  getItensByIdCategoryAndQuery,
  getItensById
};
