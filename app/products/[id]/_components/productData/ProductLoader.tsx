import ProductProvider from "./ProductProvider";

export default async function ReviewsLoader({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  const productReq = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-cache",
  });
  const product = await productReq.json();

  return (
    <ProductProvider
      id={id}
      title={product.title}
      description={product.description}
    >
      {children}
    </ProductProvider>
  );
}
