"use client";
import { useState } from "react";
import { useReviewsStore } from "../reviewsData/ReviewsProvider";

export default function Reviews() {
  const [title, setTitle] = useState("");
  const useReviews = useReviewsStore();
  const { reviews, setReviews } = useReviews();

  return (
    <>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>{review.title}</li>
        ))}
      </ul>
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="comment">Comment</label>
          <input
            id="comment"
            type="text"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            className="text-black"
          />
        </div>
        <button
          onClick={() => {
            setReviews([
              ...reviews,
              {
                id: Math.random(),
                title,
              },
            ]);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
