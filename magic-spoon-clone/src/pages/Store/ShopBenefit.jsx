import thumb from "../../assets/img/thumb.svg";

const ShopBenefit = ({ text, isVisible = true }) => {
  return (
    <div
      className={`${
        isVisible ? "" : "opacity-25 "
      } flex w-full flex-col items-center justify-center text-center`}
    >
      <img src={thumb} alt="thumb" />
      <p className="w-4/5 text-xs font-normal">{text}</p>
    </div>
  );
};

export default ShopBenefit;
