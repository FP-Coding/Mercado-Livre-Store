import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function Home() {
  const [query, setQuery] = useState('');
  return (
    <main>
      <div className="flex items-center justify-center gap-3 mt-5 h-8">
        <input
          type="text"
          value={query}
          onChange={({ target: { value } }) => setQuery(value)}
          className="rounded w-1/3 h-full bg-slate-600 outline-none focus:border-purple-300 focus:border-2"
        />
        <button
          type="button"
          className="bg-purple-600 h-full px-2 py-1 rounded duration-300 hover:bg-opacity-50"
        >
          Pesquisar
        </button>
      </div>
    </main>
  );
}

// Home.propTypes = {}.isRequired;

export default Home;
