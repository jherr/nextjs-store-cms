"use client";
import { createContext, useContext } from "react";
import { create } from "zustand";
import { type Review } from "@/app/_types";

export const createReviewsStore = () =>
  create<{
    reviews: Review[];
    setReviews: (reviews: Review[]) => void;
  }>((set) => ({
    reviews: [],
    setReviews: (reviews) => set({ reviews }),
  }));

export const ReviewsContext = createContext<ReturnType<
  typeof createReviewsStore
> | null>(null);

export const useReviewsStore = () => {
  const context = useContext(ReviewsContext);
  if (context === null) {
    throw new Error("useReviewsStore must be used within an ReviewsProvider");
  }
  return context;
};

export default function ReviewsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReviewsContext.Provider value={createReviewsStore()}>
      {children}
    </ReviewsContext.Provider>
  );
}
