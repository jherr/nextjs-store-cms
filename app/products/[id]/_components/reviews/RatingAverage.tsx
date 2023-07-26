"use client";
import { use } from "react";
import { useReviewsContext } from "../reviewsData/ReviewsProvider";

export default function RatingAverage() {
  const reviews = use(useReviewsContext()!) ?? [];

  if (!reviews) return null;

  return (
    <div>
      Average Rating:{" "}
      {(
        reviews.reduce((total, { rating }) => total + rating, 0) /
        reviews.length
      ).toFixed(1)}
    </div>
  );
}
