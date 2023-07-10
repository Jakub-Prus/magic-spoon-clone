const ShopFeature = ({ title, text }) => {
  return (
    <div className="mx-auto mb-7 flex w-full flex-col items-center justify-center text-center">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="px-1 text-sm font-normal">{text}</p>
    </div>
  );
};

export default ShopFeature;
