import { useState } from "react";
import ShopRatingStars from "./ShopRatingStars";
import ShopCustomerReview from "./ShopCustomerReview";

const ShopProductReview = () => {
  const [productRating, setProductRating] = useState(4.8);
  const [numberReviews, setNumberReviews] = useState(40538);

  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#FFEC6B] to-[#BFEFFF] py-8 text-purple">
      <h2 className="text-outlined1-5 flex w-full flex-col text-center text-5xl text-transparent md:w-1/4 md:text-6xl">
        <span>WHAT</span> <span>SPOONERS</span> <span>ARE SAYING</span>
      </h2>
      <div className="mb-8 mt-10 flex w-3/5 flex-col items-center text-center">
        <h4 className="text-4xl">{productRating}</h4>
        <ShopRatingStars rating={productRating} />
        <div className="font-bold">Based on {numberReviews} reviews</div>
      </div>
      <div className="w-3/4">
        <ShopCustomerReview
          customerName="IAN O."
          title="A DELICIOUS SNACK"
          stars={5}
          content="This cereal is a really fantastic late night snack that is light an sweet but not loaded in sugar. A healthy splash of milk and you’ll think you’re having a strawberry shake!"
        />
      </div>
    </div>
  );
};

export default ShopProductReview;
