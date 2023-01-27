import Head from "next/head";
import { PropsWithChildren } from "react";

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
      <main className="container mx-auto px-10">{children}</main>
    </>
  );
}
