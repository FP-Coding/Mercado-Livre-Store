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

const getItensByQuery = async (QueryText) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${QueryText}`;
    const request = await fetch(endpoint);
    const { results } = await request.json();
    return results;
  } catch (error) {
    return undefined;
  }
};

const getItensByIdCategory = async (id) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
    const request = await fetch(endpoint);
    const { results } = await request.json();
    return results;
  } catch (error) {
    return undefined;
  }
};

export { getAllCategories, getItensByQuery, getItensByIdCategory };
