const ShopUsVsThem = () => {
  return (
    <div className="relative flex w-full flex-col items-center bg-[#bfefff] py-12 text-purple lg:flex-row">
      {/* <img
        src="./assets/img/store/us-vs-them.svg"
        alt=""
        className="absolute -top-[9rem] left-0 z-20 h-[50vh] w-screen rotate-90 md:-top-[17rem] md:h-[60vh] lg:left-[-45%] lg:top-[10%] lg:h-[80vh] lg:rotate-0"
      /> */}
      <img
        src="./assets/img/store/us-vs-them.svg"
        alt=""
        className="absolute top-0 h-[98vw] -translate-y-[43%] rotate-90 lg:h-full lg:-translate-y-[0%] lg:rotate-0"
      />
      <div className="z-20 flex w-full flex-col items-center md:pt-20 lg:mx-20 lg:ml-32 lg:pt-0">
        <h3 className="mb-8 mt-10 w-2/3 text-center text-2xl lg:text-3xl">
          How do we stack up to the “classics”?
        </h3>
        <img
          src="./assets/img/store/charts/chart-variety.webp"
          alt=""
          className="w-[90%]"
        />
        <p className="mt-4 w-[90%] text-center text-xs font-semibold">
          NORMALIZED PER 37G SERVING. INFORMATION AS OF FEBRUARY 2021.
        </p>
      </div>
    </div>
  );
};

export default ShopUsVsThem;
