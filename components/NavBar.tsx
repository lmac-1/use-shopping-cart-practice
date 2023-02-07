import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function NavBar() {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <nav className="bg-white px-6 mx-auto py-6 w-100 sm:container lg:max-w-[900px] flex justify-between">
      <p className="text-5xl font-semibold text-lime-900">fresh</p>
      <button
        className={`relative ${
          !cartCount ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={() => (!cartCount ? null : handleCartClick())}
      >
        <Image
          src="./cart.svg"
          width={40}
          height={40}
          alt="Shopping cart icon"
        />
        {cartCount != 0 && cartCount != undefined && (
          <div className="rounded-full flex justify-center items-center bg-black text-xs text-white absolute w-6 h-5 bottom-7 right-0">
            {cartCount}
          </div>
        )}
      </button>
    </nav>
  );
}
