import ShopRatingStars from "./ShopRatingStars";

const ShopCustomerReview = ({ date, customerName, title, stars, content }) => {
  return (
    <div className="mb-8 flex h-min w-full flex-col items-center justify-center bg-white p-5 text-purple lg:w-3/5">
      <div className="flex h-min w-full flex-col items-center justify-center border-b-2 border-b-purple pb-2">
        <div className="font-base mb-2 w-full text-right text-xs">about 2 hours ago</div>
        <div className="mb-5 w-full text-left text-sm">
          {customerName} <span className="text-sm font-light">Verified Buyer</span>
        </div>
        <ShopRatingStars rating={stars} />
      </div>
      <h3 className="text-outlined1-5 mb-4 mt-4 w-3/4 text-center text-3xl text-transparent">
        {title}
      </h3>
      <p className="text-center text-sm font-normal">{content}</p>
    </div>
  );
};

export default ShopCustomerReview;
