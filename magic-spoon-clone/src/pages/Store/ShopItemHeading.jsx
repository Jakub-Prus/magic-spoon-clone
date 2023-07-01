import stars from "../../assets/img/store/stars.svg";

const ShopItemHeading = ({ title, reviews }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-outlined2 text-center text-5xl text-transparent">{title}</h1>
      <p className="font-bold">1 CASE(4 BOXES)</p>
      <div className="mt-2 flex w-full flex-row items-center justify-center">
        <img src={stars} alt="" className="w-[100px]" />
        <p className="ml-1 text-base font-bold">{reviews + " Reviews"} </p>
      </div>
    </div>
  );
};

export default ShopItemHeading;
