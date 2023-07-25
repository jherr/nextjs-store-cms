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
  return (
    <main>
      <ProductLoader id={+id}>
        <ReviewsProvider>
          <div className="grid grid-cols-[30%_70%]">
            <ProductImage id={+id} />
            <div>
              <Title />
              <Description />
              <Suspense fallback={<div>Loading Reviews...</div>}>
                <ReviewsLoader id={+id}>
                  <RatingAverage />
                </ReviewsLoader>
              </Suspense>
            </div>
          </div>
          <div>
            <Suspense fallback={<div>Loading Reviews...</div>}>
              <ReviewsLoader id={+id}>
                <Reviews />
              </ReviewsLoader>
            </Suspense>
          </div>
          <Recommended id={+id} />
        </ReviewsProvider>
      </ProductLoader>
    </main>
  );
}
