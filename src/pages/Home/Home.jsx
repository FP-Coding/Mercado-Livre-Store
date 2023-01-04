import React, { useState, useEffect } from 'react';
import {
  getItensByIdCategoryAndQuery,
  getAllCategories,
  getItensByIdCategory
} from '../../utils/api';
import ProductCard from '../../components/ProductCard/ProductCard';
import Header from '../../components/Header/Header';

function Home() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [idCategorySearched, setIdCategorySearched] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requestCategories = async () => {
      const allCategories = await getAllCategories();
      setCategories(allCategories);
    };
    requestCategories();
  }, []);

  useEffect(() => {
    const filterById = async () => {
      setIsLoading(true);
      const getItems = await getItensByIdCategory(idCategorySearched);
      setItems(getItems);
      setIsLoading(false);
    };
    filterById();
  }, [idCategorySearched]);

  const submitSearch = async () => {
    setIsLoading(true);
    const itemsSearched = await getItensByIdCategoryAndQuery(
      idCategorySearched,
      query
    );
    setItems(itemsSearched);
    setIsLoading(false);
  };

  return (
    <main>
      <Header search={query} setSearch={setQuery} submitSearch={submitSearch} />
      <div className="flex">
        <aside className="hidden lg:flex flex-col mt-8 ml-8 p-4 w-[12%] rounded bg-gray-700">
          {categories.map(({ name, id }) => (
            <label htmlFor={id} key={id}>
              <input
                type="radio"
                name="selectCategory"
                value={name}
                id={id}
                onChange={({ target }) => setIdCategorySearched(target.id)}
              />
              {name}
            </label>
          ))}
        </aside>
        {!isLoading ? (
          <section className="m-8 w-[90%] text-center">
            {items.length < 1 ? (
              <p className="m-auto">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            ) : (
              <div className="flex gap-2 flex-wrap items-center justify-center">
                {items.map(
                  ({
                    id,
                    title,
                    thumbnail,
                    price,
                    available_quantity: stockQuantity,
                    shipping: { free_shipping: isShippingFree }
                  }) => (
                    <ProductCard
                      key={id}
                      id={id}
                      name={title}
                      image={thumbnail}
                      price={price}
                      stock={stockQuantity}
                      isShippingFree={isShippingFree}
                    />
                  )
                )}
              </div>
            )}
          </section>
        ) : (
          <p>Carregando</p>
        )}
      </div>
    </main>
  );
}

export default Home;
