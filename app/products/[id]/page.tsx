import SyncProvider from "./_components/SyncProvider";
import AsyncProvider from "./_components/reviewsData/ReviewsProvider";
import Counter from "./_components/Counter";
import ReviewsLoader from "./_components/reviewsData/ReviewsLoader";
import Reviews from "./_components/reviews/Reviews";
import ReviewCount from "./_components/reviews/ReviewsCount";

import { Suspense } from "react";

export default function ProductPage() {
  return (
    <main>
      <SyncProvider count={0}>
        <AsyncProvider>
          <h1>SyncProvider</h1>
          <div className="flex">
            <div>
              <Counter />
              <Suspense>
                <ReviewsLoader>
                  <Reviews />
                </ReviewsLoader>
              </Suspense>
            </div>
            <div>
              <Counter />
              <Suspense>
                <ReviewsLoader>
                  <ReviewCount />
                </ReviewsLoader>
              </Suspense>
            </div>
          </div>
        </AsyncProvider>
      </SyncProvider>
    </main>
  );
}
