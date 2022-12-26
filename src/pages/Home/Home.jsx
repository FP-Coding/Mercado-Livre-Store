import React, { useState } from 'react';
import { getItensByIdCategoryAndQuery } from '../../utils/api';
import ProductCard from '../../components/ProductCard/ProductCard';
// import PropTypes from 'prop-types';

function Home() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [idCategorySearched, setIdCategorySearched] = useState('');

  const submitSearch = async () => {
    const itemsSearched = await getItensByIdCategoryAndQuery(
      idCategorySearched,
      query
    );
    setItems(itemsSearched);
    setIdCategorySearched('');
  };
  return (
    <main>
      <section className="flex items-center justify-center gap-3 mt-5 h-12">
        <input
          type="text"
          value={query}
          onChange={({ target: { value } }) => setQuery(value)}
          className="rounded w-[45%] h-full p-2 bg-slate-600 outline-none focus:border-purple-300 focus:border-2"
        />
        <button
          type="button"
          className="bg-purple-600 h-full px-2 py-1 rounded duration-300 hover:bg-opacity-50"
          onClick={submitSearch}
        >
          Pesquisar
        </button>
      </section>
      <section className="mt-5">
        {items.length < 1 ? (
          <p className="text-center">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          <div className="flex gap-2 flex-wrap m-4 items-center justify-center">
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
    </main>
  );
}

// Home.propTypes = {}.isRequired;

export default Home;
