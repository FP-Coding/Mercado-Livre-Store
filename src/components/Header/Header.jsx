import React from 'react';
import { string, func } from 'prop-types';

function Header({ search, setSearch, submitSearch }) {
  return (
    <section className="flex items-center justify-center gap-3 mt-5 h-12">
      <input
        type="text"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
        className="rounded w-[70%] h-full p-2 bg-slate-600 outline-none focus:border-purple-300 focus:border-2"
      />
      <button
        type="button"
        className="bg-purple-600 w-[7%] font-bold h-full px-2 py-1 rounded duration-300 hover:bg-opacity-50"
        onClick={submitSearch}
      >
        Pesquisar
      </button>
    </section>
  );
}

Header.propTypes = {
  search: string,
  setSearch: func,
  submitSearch: func
}.isRequired;

export default Header;
