import ReviewsLoaderClient from "./ReviewsLoaderClient";

export default async function ReviewsLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const reviewsReq = await fetch("http://localhost:3000/api/product", {
    cache: "no-cache",
  });
  const reviews = await reviewsReq.json();

  return (
    <ReviewsLoaderClient reviews={reviews.reviews}>
      {children}
    </ReviewsLoaderClient>
  );
}
