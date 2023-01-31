import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { CartProvider } from "use-shopping-cart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/?success=true`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
      currency="GBP"
      allowedCountries={["GB"]}
      billingAddressCollection={false}
      shouldPersist={true}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
