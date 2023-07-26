"use client";
import { useState, use } from "react";
import { type Review } from "@/app/_types";

import { useReviewsContext } from "./ReviewsProvider";

export default function ReviewsLoaderClient({
  children,
  reviewsReq,
}: {
  children: React.ReactNode;
  reviewsReq: Promise<Review[]>;
}) {
  const reviews = use(useReviewsContext()!);
  return <>{children}</>;
}
