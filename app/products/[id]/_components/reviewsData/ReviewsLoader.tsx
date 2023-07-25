import ReviewsLoaderClient from "./ReviewsLoaderClient";

export default async function ReviewsLoader({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  const reviewsReq = await fetch(
    `http://localhost:3000/api/products/${id}/reviews`,
    {
      cache: "no-cache",
    }
  );
  const reviews = await reviewsReq.json();

  return (
    <ReviewsLoaderClient reviews={reviews}>{children}</ReviewsLoaderClient>
  );
}
