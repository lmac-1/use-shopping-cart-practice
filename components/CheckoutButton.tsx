import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutButton() {
  const [status, setStatus] = useState("idle");
  const { redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    if (cartCount && cartCount > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.log(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.log(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("missing-items");
    }
  }
  return (
    <article className="mb-5">
      <div className="text-red-700 text-xs mb-3 h-5">
        {totalPrice && totalPrice < 30
          ? "You must have at least £0.30 in your basket to checkout"
          : cartCount && cartCount > 20
          ? "You cannot have more than 20 items"
          : status === "redirect-error"
          ? "Unable to redirect to Stripe checkout page."
          : status === "missing-items"
          ? "Please add items to the cart"
          : null}
      </div>
      <button
        onClick={handleClick}
        disabled={
          (totalPrice && totalPrice < 30) || (cartCount && cartCount > 20)
            ? true
            : false
        }
        className="transition-colors duration-300 bg-emerald-700 text-white rounded-md py-3 mt-auto w-full disabled:bg-slate-300 disabled:cursor-not-allowed"
      >
        {status !== "loading" ? "Checkout" : "Loading..."}
      </button>
    </article>
  );
}
