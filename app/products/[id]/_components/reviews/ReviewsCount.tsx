"use client";
import { useReviewsStore } from "../reviewsData/ReviewsProvider";

export default function ReviewCount() {
  const useReviews = useReviewsStore();
  const { reviews } = useReviews();

  return <div>Review Count: {reviews.length}</div>;
}
