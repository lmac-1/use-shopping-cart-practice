import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart/core";
import CartEntry from "./CartEntry";
import CheckoutButton from "./CheckoutButton";

export default function ShoppingCart() {
  const {
    shouldDisplayCart,
    handleCloseCart,
    cartDetails,
    removeItem,
    totalPrice,
    clearCart,
    incrementItem,
    decrementItem,
    cartCount,
  } = useShoppingCart();

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry
      key={entry.id}
      entry={entry}
      removeItem={removeItem}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
    />
  ));
  const emptyCart = () => {
    clearCart();
    handleCloseCart();
  };

  return (
    <div
      className={`top-0 bottom-0 right-0 w-screen sm:w-96 bg-white fixed h-full z-40 ease-in-out duration-300 overflow-y-scroll ${
        shouldDisplayCart
          ? "translate-x-0 shadow-[0_0_0_10000px_rgba(0,0,0,.70)]"
          : "translate-x-full"
      }`}
    >
      <div className="sticky top-0 bg-white">
        <div className="flex justify-between px-6 py-5">
          <h2 className="text-2xl">Cart</h2>
          <button className="text-3xl" onClick={() => handleCloseCart()}>
            &times;
          </button>
        </div>
      </div>
      <div className="flex gap-8 flex-col overflow-auto px-5">
        {cartCount && cartCount > 0 ? (
          <>
            {cartEntries}
            <div className="flex mt-4 justify-end items-center">
              {/* todo: Are you sure? pop up */}
              <button
                onClick={() => emptyCart()}
                className="mr-6 underline text-xs mt-1 text-slate-800"
              >
                Clear cart
              </button>
              <div className="text-right font-bold text-xl">
                Total:{" "}
                {formatCurrencyString({
                  value: totalPrice || 0,
                  currency: "GBP",
                })}
              </div>
            </div>
            <CheckoutButton />
          </>
        ) : (
          "Your cart is empty"
        )}
      </div>
    </div>
  );
}
