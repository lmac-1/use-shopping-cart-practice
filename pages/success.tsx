import Link from "next/link";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function Success() {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="bg-white w-fit mx-auto px-5 py-6 rounded-md text-center">
      <p>
        Congrats, your payment has been accepted. Your products will be with you
        soon.
      </p>
      <button className="bg-emerald-700 rounded-md px-6 py-2 text-white mt-6">
        <Link href="./">Shop again</Link>
      </button>
    </div>
  );
}
