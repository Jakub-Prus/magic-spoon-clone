import ShopFeature from "./ShopFeature";

const ShopFeatures = () => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center bg-[#bfefff] pt-10 text-sm font-semibold text-purple lg:flex-row lg:py-16">
      <img
        src="assets/img/store/features-bowl.webp"
        alt="bowl of cereal"
        className="block lg:hidden"
      />
      <img
        src="assets/img/store/spoon.webp"
        alt="spoon"
        className="absolute right-[10%] top-[12%] z-20 w-[44%] origin-bottom-left lg:right-[8%] lg:top-[0%]"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute right-10 top-14 w-5 -rotate-[36deg] text-purple"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute left-20 top-6 w-5 -rotate-[36deg] text-purple lg:hidden"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className="absolute left-12 top-44 w-5 -rotate-[36deg] text-purple"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt=""
        className=" absolute bottom-24 left-6 z-20 w-5 -rotate-[36deg] text-purple lg:bottom-32 lg:left-1/4"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute bottom-44 right-4 z-20 w-5 -rotate-[36deg] text-purple lg:bottom-36 lg:right-1/3"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute right-1/3 top-28 z-20 hidden w-5 -rotate-[36deg] text-purple lg:block"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute left-1/3 top-10 z-20 hidden w-5 -rotate-[36deg] text-purple lg:block"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute bottom-40 left-1/3 z-20 hidden w-5 -rotate-[36deg] text-purple lg:block"
      />
      <img
        src="assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute bottom-32 left-1/4 z-20 hidden w-5 -rotate-[36deg] text-purple lg:block"
      />
      <div className="mb-6 mt-4 flex w-[90%] flex-row items-center justify-center">
        <div className="z-30 grid h-72 w-[96%] grid-cols-1 grid-rows-3 gap-2 lg:w-full lg:gap-36">
          <ShopFeature title="HIGH PROTEIN" text="13-14g complete protein per serving." />
          <ShopFeature title="KETO-FRIENDLY" text="Just 4-5g net carbs per serving." />
          <ShopFeature
            title="0G SUGAR"
            text="No cane sugar, corn syrup, or sugar alcohols."
          />
        </div>
        <img
          src="assets/img/store/features-bowl.webp"
          alt="bowl of cereal"
          className="z-10 -mx-40 hidden lg:block"
        />
        <div className="z-30 grid h-72 w-[96%] grid-cols-1 grid-rows-3 gap-2 lg:w-full lg:gap-36">
          <ShopFeature title="GLUTEN FREE" text="No gluten-containing ingredients." />
          <div className="mx-auto mb-7 flex w-full flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold lg:text-3xl">GRAIN FREE</h3>
            <p className="w-full px-1 text-sm font-normal lg:text-lg lg:font-medium">
              No wheat, rice, or soy.
            </p>
            <br />
          </div>
          <ShopFeature
            title="NATURAL FLAVORS"
            text="No artificial colors or sweeteners."
          />
        </div>
        <img
          src="assets/img/hold-on-to-the-dream.svg"
          alt=""
          className="absolute -bottom-24 right-24 z-20 mt-8 hidden h-44 w-44 animate-spin-slow lg:block"
        />
      </div>
    </div>
  );
};

export default ShopFeatures;
