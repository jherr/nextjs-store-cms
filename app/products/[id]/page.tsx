import ProductLoader from "./_components/productData/ProductLoader";
import Title from "./_components/product/Title";
import Description from "./_components/product/Description";

import ReviewsProvider from "./_components/reviewsData/ReviewsProvider";
import Reviews from "./_components/reviews/Reviews";
import RatingAverage from "./_components/reviews/RatingAverage";

import Recommended from "./_components/Recommended";
import ProductImage from "./_components/ProductImage";

import products from "@/app/api/products/_data/products.json";

import { Suspense } from "react";
import { revalidatePath } from "next/cache";

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const productId = +id;
  const reviewsReq = fetch(`http://localhost:3000/api/products/${id}/reviews`, {
    cache: "no-cache",
  }).then((res) => res.json());

  const addReview = async (title: string, rating: number) => {
    "use server";
    const product = products.find((product) => product.id === productId);
    const maxId = Math.max(
      ...products.map(({ reviews }) => reviews.map(({ id }) => id)).flat()
    );
    if (product) {
      product.reviews.push({
        id: maxId + 1,
        title,
        rating,
      });
      revalidatePath(`/products/${productId}`);
    }
  };

  return (
    <main>
      <ProductLoader id={productId}>
        <ReviewsProvider reviewsReq={reviewsReq}>
          <div className="grid grid-cols-[30%_70%]">
            <ProductImage id={productId} />
            <div className="ml-4">
              <Title />
              <Description />
              <Suspense fallback={<div>Loading Reviews...</div>}>
                <RatingAverage />
              </Suspense>
            </div>
          </div>
          <div>
            <Suspense fallback={<div>Loading Reviews...</div>}>
              <Reviews addReview={addReview} />
            </Suspense>
          </div>
          <Recommended id={productId} />
        </ReviewsProvider>
      </ProductLoader>
    </main>
  );
}
