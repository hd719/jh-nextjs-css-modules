import PRODUCTS from "./products";
import { ProductCard } from "./ProductCard";

export default function Home() {
  return (
    <main>
      {PRODUCTS.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
}
