import Link from "next/link";

import ProductCard from "@/app/_components/ProductCard";
import { Product } from "@/app/_types";

export default async function Recommended({ id }: { id: number }) {
  const products = (await fetch("http://localhost:3000/api/products").then(
    (res) => res.json()
  )) as Product[];

  return (
    <ul role="list" className="flex flex-row flex-wrap gap-2 mt-2">
      {products
        .filter(({ id: productId }) => productId !== id)
        .slice(0, 4)
        .map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <ProductCard {...product} fixedWidth />
            </Link>
          </li>
        ))}
    </ul>
  );
}
