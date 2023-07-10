const ShopUsVsThem = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#bfefff] py-8 text-purple">
      <h2 className="text-outlined text-center text-6xl text-transparent">US VS THEM</h2>
      <h3 className="mt-10 w-2/3 text-center text-2xl">
        How do we stack up to the “classics”?
      </h3>
      <img
        src="src/assets/img/store/charts/chart-variety.webp"
        alt=""
        className="w-[90%]"
      />
      <p className="mt-4 w-[90%] text-center text-xs font-semibold">
        NORMALIZED PER 37G SERVING. INFORMATION AS OF FEBRUARY 2021.
      </p>
    </div>
  );
};

export default ShopUsVsThem;
