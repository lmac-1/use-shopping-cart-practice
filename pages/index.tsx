import Products from "@/components/Products";
import { products as productData } from "../data/products";
//import { DebugCart } from "use-shopping-cart";

export default function Home() {
  return (
    <>
      <Products productData={productData} />
      {/* <DebugCart /> */}
    </>
  );
}
