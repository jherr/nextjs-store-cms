import { Suspense } from "react";
import ReviewsLoaderClient from "./ReviewsLoaderClient";
import { useReviewsContext } from "./ReviewsProvider";

export default async function ReviewsLoader({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  return (
    <Suspense>
      <ReviewsLoaderClient reviewsReq={reviewsReq}>
        {children}
      </ReviewsLoaderClient>
    </Suspense>
  );
}
