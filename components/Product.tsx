import { useShoppingCart } from "use-shopping-cart";
import { Product as ProductType } from "use-shopping-cart/core";
import { formatCurrencyString } from "use-shopping-cart/core";

export default function Product({ product }: { product: ProductType }) {
  const {
    addItem,
    //removeItem
  } = useShoppingCart();
  return (
    <article className="flex flex-col p-8 shadow-lg gap-3 text-center bg-white rounded-xl mb-6">
      <div className="text-8xl transition-[font-size] hover:text-[110px] h-[120px]">
        {product.emoji}
      </div>
      <div className="text-lg">{product.name}</div>
      <div className="text-2xl font-semibold">
        {formatCurrencyString({
          value: product.price,
          currency: product.currency,
        })}
      </div>
      <div className="flex justify-around mt-4 mb-2">
        <button className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500">
          -
        </button>
        <input
          className="border w-10 text-center rounded-md mx-3"
          value="1"
        ></input>
        <button className="hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500">
          +
        </button>
      </div>
      <button
        onClick={() => addItem(product)}
        className="bg-emerald-600 text-white rounded-md px-5 py-2"
      >
        Add to cart
      </button>
      {/* <button
        onClick={() => removeItem(product.id)}
        className="text-emerald-600 border border-emerald-600 rounded-md px-5 py-2"
      >
        Remove
      </button> */}
    </article>
  );
}
