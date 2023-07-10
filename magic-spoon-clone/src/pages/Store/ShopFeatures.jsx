import ShopFeature from "./ShopFeature";
import useScrollPosition from "../../hooks/useScrollPosition";

const ShopFeatures = () => {
  useScrollPosition();

  return (
    <div className="relative flex w-screen flex-col items-center justify-center bg-[#bfefff] pt-10 text-sm font-semibold text-purple">
      <img src="src/assets/img/store/features-bowl.webp" alt="bowl of cereal" />
      <img
        src="src/assets/img/store/spoon.webp"
        alt="spoon"
        className="absolute right-[10%] top-[12%] w-[44%] origin-bottom-left"
      />
      <img
        src="src/assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute right-10 top-14 w-5 -rotate-[36deg] text-purple"
      />
      <img
        src="src/assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute left-20 top-6 w-5 -rotate-[36deg] text-purple"
      />
      <img
        src="src/assets/img/store/star-purple.svg"
        alt="star"
        className="absolute left-12 top-44 w-5 -rotate-[36deg] text-purple"
      />
      <img
        src="src/assets/img/store/star-purple.svg"
        alt=""
        className=" absolute bottom-24 left-6 w-5 -rotate-[36deg] text-purple"
      />
      <img
        src="src/assets/img/store/star-purple.svg"
        alt="star"
        className=" absolute bottom-44 right-4 w-5 -rotate-[36deg] text-purple"
      />
      <div className="mb-6 mt-4 flex w-[90%] flex-row justify-center">
        <div className="grid h-72 w-[96%] grid-cols-1 grid-rows-3 gap-2">
          <ShopFeature title="HIGH PROTEIN" text="13-14g complete protein per serving." />
          <ShopFeature title="KETO-FRIENDLY" text="Just 4-5g net carbs per serving." />
          <ShopFeature
            title="0G SUGAR"
            text="No cane sugar, corn syrup, or sugar alcohols."
          />
        </div>
        <div className="grid h-72 w-[96%] grid-cols-1 grid-rows-3 gap-2">
          <ShopFeature title="GLUTEN FREE" text="No gluten-containing ingredients." />
          <div className="mx-auto mb-7 flex w-full flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold">GRAIN FREE</h3>
            <p className="px-1 text-sm font-normal">No wheat, rice, or soy.</p>
            <br />
          </div>
          <ShopFeature
            title="NATURAL FLAVORS"
            text="No artificial colors or sweeteners."
          />
        </div>
      </div>
    </div>
  );
};

export default ShopFeatures;
