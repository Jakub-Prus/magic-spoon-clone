import Feature from "./Feature";

const MainFeatures = () => {
  return (
    <section className="flex h-min w-full flex-col items-center justify-around bg-[#5b00ed] pt-20">
      <Feature
        title={"High Protein"}
        text={"12g-14g complete protein in every bowl."}
      />
      <Feature title={"Keto- Friendly"} text={"4g-5g net carbs per bowl."} />
      <Feature
        title={"Sweet & Delicious"}
        text={"Tastes just like you remember, only better."}
      />
      <img
        src="src/assets/img/cereal-boxes.jpg"
        alt="cereal boxes"
        className="mt-20"
      />
    </section>
  );
};

export default MainFeatures;
