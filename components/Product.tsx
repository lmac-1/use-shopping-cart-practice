import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Product as ProductType } from "use-shopping-cart/core";
import { formatCurrencyString } from "use-shopping-cart/core";

export default function Product({ product }: { product: ProductType }) {
  const { addItem, shouldDisplayCart } = useShoppingCart();

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    addItem(product, {
      count: quantity,
    });
    setQuantity(1);
  };

  return (
    <article className="flex flex-col p-8 shadow-lg gap-3 text-center bg-white rounded-xl mb-6">
      <div className="text-8xl transition-[font-size] hover:text-[110px] hover:duration-150 duration-300 h-[120px] cursor-default">
        {product.emoji}
      </div>
      <div className="text-lg">{product.name}</div>
      <div className="text-2xl font-semibold mt-auto">
        {formatCurrencyString({
          value: product.price,
          currency: product.currency,
        })}
      </div>
      <div className="flex justify-around mt-4 mb-2">
        <button
          onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          -
        </button>
        <input
          className="border w-10 text-center rounded-md mx-3"
          value={quantity}
        ></input>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          +
        </button>
      </div>
      <button
        onClick={() => (!shouldDisplayCart ? addToCart() : null)}
        className={`bg-emerald-600 text-white rounded-md px-5 py-2 ${
          shouldDisplayCart && "cursor-default"
        }`}
      >
        Add to cart
      </button>
    </article>
  );
}
