"use client";
import { useRef } from "react";

import { type Review, useReviewsStore } from "./ReviewsProvider";

export default function ReviewsLoaderClient({
  children,
  reviews,
}: {
  children: React.ReactNode;
  reviews: Review[];
}) {
  const useReviews = useReviewsStore();
  const { setReviews } = useReviews();

  const loaded = useRef(false);
  if (!loaded.current) {
    setReviews(reviews);
    loaded.current = true;
  }
  return <>{children}</>;
}
