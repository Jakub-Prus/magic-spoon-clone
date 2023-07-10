const ShopRatingStars = ({ rating }) => {
  return (
    <div className="relative mb-4 h-6 w-[125px]">
      <span className="absolute bottom-0 left-0 right-0 top-0">
        <span className="absolute left-0 z-10 h-full w-full bg-[url('src/assets/img/store/empty-stars.svg')] bg-[length:125px_25px] bg-no-repeat" />
        <span
          className={`absolute left-0 z-20 h-full bg-[url('src/assets/img/store/filled-stars.svg')] bg-[length:125px_25px] bg-no-repeat`}
          style={{ width: `${rating * 20}%` }}
        />
      </span>
    </div>
  );
};

export default ShopRatingStars;
