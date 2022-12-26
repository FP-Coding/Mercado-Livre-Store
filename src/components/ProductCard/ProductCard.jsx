import React from 'react';
import { number, string, bool } from 'prop-types';

function ProductCard({ id, name, image, price, stock, isShippingFree }) {
  const addToCart = () => stock;
  return (
    <div
      id={id}
      className="flex p-4 flex-col bg-slate-600 rounded gap-4 md:w-60 md:h-[25rem]"
    >
      <h4 className="text-md overflow-hidden overflow-ellipsis line-clamp-2">
        {name}
        ...
      </h4>
      <div className="relative">
        {isShippingFree ? (
          <p className="bg-red-500 rounded-full p-2 absolute right-2 top-2">
            Frete Grátis
          </p>
        ) : null}
        <img src={image} alt={name} className="h-full w-full" />
      </div>
      <p>
        <span>R$: </span>
        {price}
      </p>
      <button
        type="button"
        className="bg-green-600 rounded p-2 font-bold"
        onClick={addToCart}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  id: string,
  name: string,
  image: string,
  price: number,
  stock: number,
  isShippingFree: bool
}.isRequired;

export default ProductCard;
