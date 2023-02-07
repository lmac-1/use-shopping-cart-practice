import Head from "next/head";
import { PropsWithChildren } from "react";
import { useShoppingCart } from "use-shopping-cart";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default function Layout({ children }: PropsWithChildren<any>) {
  const { shouldDisplayCart, handleCloseCart } = useShoppingCart();

  return (
    <>
      <Head>
        <title>Use Shopping Cart Example</title>
        <meta
          name="description"
          content="A simple website to show how to use use-shopping-cart"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`min-h-screen bg-[#f8f7f5] ${
          shouldDisplayCart ? "max-h-screen overflow-hidden" : "relative"
        }`}
      >
        <ShoppingCart />
        <NavBar />
        <main
          className="px-10 py-8"
          onClick={() => (shouldDisplayCart ? handleCloseCart() : null)}
        >
          <div className="container md:mx-auto md:max-w-[850px]">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
