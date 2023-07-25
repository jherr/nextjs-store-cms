import Link from "next/link";

import ProductCard from "./_components/ProductCard";
import { Product } from "@/app/_types";

export default async function Home() {
  const products = (await fetch("http://localhost:3000/api/products").then(
    (res) => res.json()
  )) as Product[];

  return (
    <ul role="list" className="flex flex-row flex-wrap gap-2 mt-2">
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <ProductCard {...product} fixedWidth />
          </Link>
        </li>
      ))}
    </ul>
  );
}
