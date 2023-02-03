import Product from "./Product";
import { Product as ProductType } from "use-shopping-cart/core";

export default function Products({
  productData,
}: {
  productData: ProductType[];
}) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-3 place-center flex-wrap w-100 md:max-w-[900px]">
      {productData.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
