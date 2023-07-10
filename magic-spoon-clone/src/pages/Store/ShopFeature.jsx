const ShopFeature = ({ title, text }) => {
  return (
    <div className="mx-auto mb-7 flex w-full flex-col items-center justify-center text-center">
      <h3 className="text-lg font-bold lg:text-3xl">{title}</h3>
      <p className="w-full px-1 text-sm font-normal lg:text-lg lg:font-medium">{text}</p>
    </div>
  );
};

export default ShopFeature;
