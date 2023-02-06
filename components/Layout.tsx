import Head from "next/head";
import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default function Layout({ children }: PropsWithChildren<any>) {
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
      <NavBar />
      <ShoppingCart />
      <main className="px-10 bg-slate-50 py-8">
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
}
