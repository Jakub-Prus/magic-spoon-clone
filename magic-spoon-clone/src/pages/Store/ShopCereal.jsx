import { useState } from "react";
import ShopItemDetails from "./ShopItemDetails";
import ShopProductOptions from "./ShopProductOptions";

const ShopCereal = () => {
  const [chosenProduct, setChosenProduct] = useState("VARIETY");

  const shopData = [
    {
      id: "VARIETY",
      title: "VARIETY",
      description:
        "Try our most popular flavors—Fruity, Frosted, Cocoa, and Peanut Butter. We’ve reimagined all your favorite childhood cereals with only 4-5g net carbs, 13-14g complete protein, 140-170 calories, and nothing artificial.",
      reviews: "22688",
    },
    {
      id: "FRUITY",
      title: "FRUITY",
      description:
        "A fruity cereal that isn’t loopy. We’ve reimagined your favorite fruit-forward childhood cereal with 4g net carbs, 13g complete protein, 150 calories, and no artificial ingredients.",
      reviews: "2035",
    },
    {
      id: "PEANUT BUTTER",
      title: "PEANUT BUTTER",
      description:
        "Crunchy, nutty, and perfectly sweet. We’ve reimagined your favorite peanut butter cereal with 4g net carbs, 14g complete protein, 170 calories, and no artificial ingredients.",
      reviews: "1215",
    },
    {
      id: "COCOA",
      title: "COCOA",
      description:
        "Dark, rich, and made with real cocoa. We’ve reimagined your favorite chocolatey cereal with only 4g net carbs, 13g complete protein, 140 calories, and nothing artificial.",
      reviews: "1496",
    },
    {
      id: "BLUEBERRY MUFFIN",
      title: "BLUEBERRY MUFFIN",
      description:
        "You won’t be able to resist the freshly baked and straight out of the oven taste of our Blueberry Muffin cereal! We’ve reimagined your favorite blueberry cereal with only 5g net carbs, 13g complete protein, 150 calories, and no artificial ingredients.",
      reviews: "850",
    },
    {
      id: "BIRTHDAY CAKE",
      title: "BIRTHDAY CAKE",
      description:
        "You bring the fun, we’ve got the ‘fetti. Birthday Cake has all the magic of a classic golden cake with vanilla frosting and plenty of sprinkles. And with 4g net carbs, 13g complete protein, and no artificial ingredients, it’s pretty much a party in a box.",
      reviews: "497",
    },
    {
      id: "HONEY NUT",
      title: "HONEY NUT",
      description:
        "Nuts about honey? Then this is the pack for you. Four times the sweet, honey-nutty goodness, all with only 4g net carbs, 13g complete protein, and no artificial ingredients.",
      reviews: "22688",
    },
    {
      id: "BIRTHDAY CAKE",
      title: "BIRTHDAY CAKE",
      description:
        "You bring the fun, we’ve got the ‘fetti. Birthday Cake has all the magic of a classic golden cake with vanilla frosting and plenty of sprinkles. And with 4g net carbs, 13g complete protein, and no artificial ingredients, it’s pretty much a party in a box.",
      reviews: "497",
    },
    {
      id: "CINNAMON ROLL",
      title: "CINNAMON ROLL",
      description:
        "Cinnamon cereal—hold the toast. We’ve reimagined your favorite cinnamon cereal with 4g net carbs, 12g complete protein, 140 calories, and no artificial ingredients.",
      reviews: "2190",
    },
  ];

  const selectedItem = shopData.find((item) => item.id === chosenProduct);
  console.log(selectedItem);
  console.log(selectedItem.reviews);

  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center justify-center bg-[#dad9ff] pt-36">
        <div className="flex w-[90%] flex-col items-center justify-center">
          <ShopItemDetails
            title={selectedItem.title}
            description={selectedItem.description}
            reviews={selectedItem.reviews}
          />
          <ShopProductOptions data={shopData} />
        </div>
      </div>
    </section>
  );
};

export default ShopCereal;
