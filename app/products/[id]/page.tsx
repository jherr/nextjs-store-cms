import ProductLoader from "./_components/productData/ProductLoader";
import Title from "./_components/product/Title";
import Description from "./_components/product/Description";

import ReviewsProvider from "./_components/reviewsData/ReviewsProvider";
import ReviewsLoader from "./_components/reviewsData/ReviewsLoader";
import Reviews from "./_components/reviews/Reviews";
import RatingAverage from "./_components/reviews/RatingAverage";

import Recommended from "./_components/Recommended";
import ProductImage from "./_components/ProductImage";

import { Suspense } from "react";

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const productId = +id;
  const reviewsReq = fetch(`http://localhost:3000/api/products/${id}/reviews`, {
    cache: "no-cache",
  }).then((res) => res.json());

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
              <Reviews />
            </Suspense>
          </div>
          <Recommended id={productId} />
        </ReviewsProvider>
      </ProductLoader>
    </main>
  );
}
