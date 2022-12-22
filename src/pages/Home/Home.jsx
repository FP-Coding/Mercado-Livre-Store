import React, { useState } from 'react';
import { getItensByIdCategoryAndQuery } from '../../utils/api';
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
      <section className="flex items-center justify-center gap-3 mt-5 h-8">
        <input
          type="text"
          value={query}
          onChange={({ target: { value } }) => setQuery(value)}
          className="rounded w-1/3 h-full bg-slate-600 outline-none focus:border-purple-300 focus:border-2"
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
          'card'
        )}
      </section>
    </main>
  );
}

// Home.propTypes = {}.isRequired;

export default Home;
