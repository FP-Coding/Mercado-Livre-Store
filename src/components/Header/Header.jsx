import React, { useEffect, useState } from 'react';
import { string, func } from 'prop-types';
import { MagnifyingGlass, ShoppingCartSimple, X } from 'phosphor-react';
import mercadoLivreLogo from '../../assets/mercadoLivreLogo.svg';
import { getItemsCart } from '../../utils/cartStorage';

function Header({ search, setSearch, submitSearch }) {
  const [isHidden, setIsHidden] = useState(false);
  const [itemsCart, setItemsCart] = useState([]);

  useEffect(() => {
    const items = getItemsCart();
    setItemsCart(items);
  }, []);

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
      <button
        type="button"
        className="relative"
        onClick={() => setIsHidden(!isHidden)}
      >
        <ShoppingCartSimple size={40} color="#fff" weight="bold" />
        <div className="flex items-center justify-center rounded-full text-center font-bold w-6 h-6 bg-red-600 absolute top-0 left-6 border-white border-solid border-x border-y">
          <p>{getItemsCart().length}</p>
        </div>
      </button>
      <div
        className={`${
          !isHidden ? 'hidden' : ''
        } absolute bg-slate-800 right-0 top-0 z-10 w-1/3 h-full overflow-y-auto`}
      >
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          <X size={52} weight="bold" className="m-4" />
        </button>
        <div className="m-4">
          {itemsCart.map(({ id, image, name, price }) => (
            <div key={id} className="mb-4">
              <img src={image} alt={name} className="rounded" />
              <h3>{name}</h3>
              <p>{price}</p>
              <div className="flex gap-2">
                <button type="button" className="bg-green-600 w-6 rounded">
                  +
                </button>
                <p>0</p>
                <button type="button" className="bg-red-600 w-6 rounded">
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  search: string,
  setSearch: func,
  submitSearch: func
}.isRequired;

export default Header;
