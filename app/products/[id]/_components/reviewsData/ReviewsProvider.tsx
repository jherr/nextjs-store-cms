"use client";
import { createContext, useContext } from "react";
import { type Review } from "@/app/_types";

export const ReviewsContext = createContext<Promise<Review[]> | null>(null);

export const useReviewsContext = () => useContext(ReviewsContext);

export default function ReviewsProvider({
  children,
  reviewsReq,
}: {
  children: React.ReactNode;
  reviewsReq: Promise<Review[]>;
}) {
  return (
    <ReviewsContext.Provider value={reviewsReq}>
      {children}
    </ReviewsContext.Provider>
  );
}
