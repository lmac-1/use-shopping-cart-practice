import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart/core";
import CartEntry from "./CartEntry";

export default function ShoppingCart() {
  const {
    shouldDisplayCart,
    handleCloseCart,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />
  ));

  return (
    <div
      className={`top-0 bottom-0 right-0 w-screen sm:w-96 bg-white px-5 fixed h-full z-40 ease-in-out duration-300 overflow-y-scroll ${
        shouldDisplayCart
          ? "translate-x-0 shadow-[0_0_0_10000px_rgba(0,0,0,.70)]"
          : "translate-x-full"
      }`}
    >
      <div className="flex justify-between my-5">
        <h2 className="text-2xl">Cart</h2>
        <button className="text-3xl" onClick={() => handleCloseCart()}>
          &times;
        </button>
      </div>
      <div className="flex gap-8 flex-col overflow-auto">
        {cartDetails ? (
          <>
            {cartEntries}
            <div className="text-right font-bold text-xl mt-4">
              Total:{" "}
              {formatCurrencyString({
                value: totalPrice || 0,
                currency: "GBP",
              })}
            </div>
          </>
        ) : (
          "No items found"
        )}
      </div>
    </div>
  );
}
