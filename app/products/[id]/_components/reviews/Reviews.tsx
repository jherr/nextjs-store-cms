"use client";
import { useState, use } from "react";
import { useReviewsContext } from "../reviewsData/ReviewsProvider";

export default function Reviews({
  addReview,
}: {
  addReview: (title: string, rating: number) => void;
}) {
  const reviews = use(useReviewsContext()!) ?? [];

  const [title, setTitle] = useState("");

  return (
    <>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>{review.title}</li>
        ))}
      </ul>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col flex-grow">
          <label htmlFor="comment">Review Text</label>
          <input
            id="comment"
            type="text"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 block w-full leading-5 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              addReview(title, 5);
            }}
          >
            Add Review
          </button>
        </div>
      </div>
    </>
  );
}
