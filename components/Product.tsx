import { useShoppingCart } from "use-shopping-cart";
import { Product as ProductType } from "use-shopping-cart/core";
import { formatCurrencyString } from "use-shopping-cart/core";

export default function Product({ product }: { product: ProductType }) {
  const { addItem, removeItem } = useShoppingCart();
  return (
    <article className="flex flex-col p-4 px-10 shadow-lg gap-3 text-center">
      <div className="text-8xl">{product.emoji}</div>
      <div className="text-xl">{product.name}</div>
      <div className="text-2xl font-semibold">
        {formatCurrencyString({
          value: product.price,
          currency: product.currency,
        })}
      </div>
      <button
        onClick={() => addItem(product)}
        className="bg-emerald-600 text-white rounded-md px-5 py-2"
      >
        Add to cart
      </button>
      <button
        onClick={() => removeItem(product.id)}
        className="text-emerald-600 border border-emerald-600 rounded-md px-5 py-2"
      >
        Remove
      </button>
    </article>
  );
}
