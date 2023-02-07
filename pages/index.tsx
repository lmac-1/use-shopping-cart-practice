import { useShoppingCart } from "use-shopping-cart";
import Products from "@/components/Products";
import { products as productData } from "../data/products";
//import { DebugCart } from "use-shopping-cart";

export default function Home() {
  /* Gets the totalPrice and method for redirecting to Stripe */
  const { totalPrice, redirectToCheckout, cartCount, clearCart } =
    useShoppingCart();

  return (
    <>
      <Products productData={productData} />
      {/* <DebugCart /> */}
    </>
  );
}
