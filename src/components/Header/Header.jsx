import React from 'react';
import { string, func } from 'prop-types';
import { MagnifyingGlass, ShoppingCartSimple } from 'phosphor-react';
import mercadoLivreLogo from '../../assets/mercadoLivreLogo.svg';

function Header({ search, setSearch, submitSearch }) {
  return (
    <header className="flex justify-between items-center p-8 bg-green-700">
      <div className="flex items-center justify-center h-12">
        <input
          type="text"
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
          className="rounded w-[25vh] h-full p-2 bg-slate-600 outline-none focus:border-purple-300 focus:border-2 z-[0]"
        />
        <button
          type="button"
          onClick={submitSearch}
          className="relative left-[-40px] z-[1]"
        >
          <MagnifyingGlass size={32} color="white" weight="bold" />
        </button>
      </div>
      <img src={mercadoLivreLogo} alt="Logo Mercado Livre" className="h-20" />
      <ShoppingCartSimple size={40} color="#fff" weight="bold" />
    </header>
  );
}

Header.propTypes = {
  search: string,
  setSearch: func,
  submitSearch: func
}.isRequired;

export default Header;
