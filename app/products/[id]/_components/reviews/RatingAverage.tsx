"use client";
import { useReviewsStore } from "../reviewsData/ReviewsProvider";

export default function RatingAverage() {
  const useReviews = useReviewsStore();
  const { reviews } = useReviews();

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
