import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart/core";
import { Product as ProductType } from "use-shopping-cart/core";
import Product from "@/components/Product";
import { DebugCart } from "use-shopping-cart";
import Image from "next/image";

const productData: ProductType[] = [
  {
    name: "Banana",
    id: "price_1MUvmgGwoRjIvC49ORvJ4PWN",
    // Prices are written in pence
    price: 20,
    emoji: "🍌",
    currency: "GBP",
  },
  {
    name: "Kiwi",
    id: "price_1MUvnAGwoRjIvC49Z3pDuwLr",
    price: 25,
    emoji: "🥝",
    currency: "GBP",
  },
  {
    name: "Pineapple",
    id: "price_1MUvmqGwoRjIvC49zISMIAnp",
    price: 100,
    emoji: "🍍",
    currency: "GBP",
  },
  {
    name: "Apple",
    id: "price_1MUvnLGwoRjIvC49bbSZo5o5",
    price: 30,
    emoji: "🍎",
    currency: "GBP",
  },
];

export default function Home() {
  /* Gets the totalPrice and method for redirecting to Sripe */
  const { totalPrice, redirectToCheckout, cartCount, clearCart, cartDetails } =
    useShoppingCart();

  return (
    <>
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
      <div className="w-9/12">
        <div className="flex mt-8 justify-between">
          {productData.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>

      <DebugCart />
    </>
  );
}
