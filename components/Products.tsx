import Product from "./Product";
import { Product as ProductType } from "use-shopping-cart/core";

export default function Products({
  productData,
}: {
  productData: ProductType[];
}) {
  return (
    <div className="flex justify-center gap-3 place-center flex-wrap">
      {productData.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
