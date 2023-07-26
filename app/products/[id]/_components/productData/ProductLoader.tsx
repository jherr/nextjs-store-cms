import { Suspense } from "react";
import ProductProvider from "./ProductProvider";

export default async function ReviewsLoader({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  const productReq = fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <div>
      <div className="text-5xl">You Should See me</div>
      <Suspense>
        <ProductProvider productReq={productReq}>{children}</ProductProvider>
      </Suspense>
    </div>
  );
}
