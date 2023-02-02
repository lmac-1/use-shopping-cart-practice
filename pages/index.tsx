import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart/core";
import Products from "@/components/Products";
import { products as productData } from "../data/products";
//import { DebugCart } from "use-shopping-cart";
import Image from "next/image";

export default function Home() {
  /* Gets the totalPrice and method for redirecting to Stripe */
  const { totalPrice, redirectToCheckout, cartCount, clearCart } =
    useShoppingCart();

  return (
    <>
      <Products productData={productData} />
      <div className="mt-5">
        <div className="flex gap-4 items-center">
          <Image
            src="./cart.svg"
            width={50}
            height={50}
            alt="Shopping cart icon"
          />
          <div>
            <p>
              Number of items:{" "}
              <span className="font-semibold">{cartCount}</span>
            </p>
            <p>
              Total:{" "}
              <span className="font-semibold">
                {totalPrice
                  ? formatCurrencyString({ value: totalPrice, currency: "GBP" })
                  : "£0"}
              </span>
            </p>
          </div>
          <button
            onClick={() => redirectToCheckout()}
            className="text-emerald-600 border border-emerald-600 rounded-md px-5 py-2"
          >
            Checkout
          </button>
          <button
            onClick={() => clearCart()}
            className="text-emerald-600 border border-emerald-600 rounded-md px-5 py-2"
          >
            Clear cart
          </button>
        </div>
      </div>
      {/* <DebugCart /> */}
    </>
  );
}
