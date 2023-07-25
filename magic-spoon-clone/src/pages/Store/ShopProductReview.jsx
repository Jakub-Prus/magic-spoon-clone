import { useState } from "react";
import ShopRatingStars from "./ShopRatingStars";
import ShopCustomerReview from "./ShopCustomerReview";

const ShopProductReview = () => {
  const [productRating, setProductRating] = useState(4.8);
  const [numberReviews, setNumberReviews] = useState(40538);

  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#FFEC6B] to-[#BFEFFF] py-8 text-purple">
      <h2 className="text-outlined1-5 flex w-full flex-col items-center justify-center text-center text-5xl text-transparent md:w-1/4 md:text-6xl">
        <span>WHAT</span> <span>SPOONERS</span> <span>ARE SAYING</span>
      </h2>
      <div className="mb-8 mt-10 flex w-3/5 flex-col items-center text-center">
        <h4 className="text-4xl">{productRating}</h4>
        <ShopRatingStars rating={productRating} />
        <div className="font-bold">Based on {numberReviews} reviews</div>
      </div>
      <div className="w-3/4">
        <ShopCustomerReview
          customerName="John D."
          title="Healthy and Tasty!"
          stars={4}
          content="Love this cereal for breakfast! It's healthy and doesn't compromise on taste. A perfect way to start the day!"
        />
      </div>
    </div>
  );
};

export default ShopProductReview;
