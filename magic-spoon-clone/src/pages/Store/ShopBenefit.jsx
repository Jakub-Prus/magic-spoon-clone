import thumb from "../../assets/img/thumb.svg";

const ShopBenefit = ({ text, isVisible = true }) => {
  return (
    <div
      className={`${
        isVisible ? "" : "opacity-25 "
      } flex w-full flex-col items-center justify-center text-center lg:flex-row lg:text-left`}
    >
      <img src={thumb} alt="thumb" />
      <p className="lg:text-xxs w-4/5 text-xs font-normal lg:ml-2 lg:w-3/5 lg:font-medium">
        {text}
      </p>
    </div>
  );
};

export default ShopBenefit;
