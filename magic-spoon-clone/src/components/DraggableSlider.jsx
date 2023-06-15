import DraggableGalleryItem from "./DraggableGalleryItem";

const DraggableSlider = () => {
  const cerealsFlavors = [
    {
      id: "0",
      title: "Variety",
      image: "src/assets/img/cereal-flavors/cereal-variety.png",
    },
    {
      id: 1,
      title: "Fruity",
      image: "src/assets/img/cereal-flavors/cereal-fruity.png",
    },
    // {
    //   id: 2,
    //   title: "Peanut Butter",
    //   image: "src/assets/img/cereal-flavors/cereal-peanut-butter.png",
    // },
    // {
    //   id: 3,
    //   title: "Cocoa",
    //   image: "src/assets/img/cereal-flavors/cereal-cocoa.png",
    // },
    // {
    //   id: 4,
    //   title: "Cinnamon Roll",
    //   image: "src/assets/img/cereal-flavors/cereal-cinnamon-roll.png",
    // },
    // {
    //   id: 5,
    //   title: "Frosted",
    //   image: "src/assets/img/cereal-flavors/cereal-frosted.png",
    // },
    // {
    //   id: 6,
    //   title: "Blueberry Muffin",
    //   image: "src/assets/img/cereal-flavors/cereal-blueberry-muffin.png",
    // },
    // {
    //   id: 7,
    //   title: "Maple Waffle",
    //   image: "src/assets/img/cereal-flavors/cereal-maple-waffle.png",
    // },
    // {
    //   id: 8,
    //   title: "Birthday Cake",
    //   image: "src/assets/img/cereal-flavors/cereal-birthday-cake.png",
    // },
  ];
  const cerealData = Object.entries(cerealsFlavors);
  console.log(cerealData);
  cerealData.map((item) => console.log(item[1]));

  return (
    <div className="z-20 -mt-4 flex h-48 w-full flex-col items-center justify-center bg-[#dad9ff] text-purple">
      <h2>FIND YOUR FLAVOR</h2>
      <div className="flex flex-row">
        {cerealData.map((item) => (
          <DraggableGalleryItem
            key={item[1].id}
            title={item[1].title}
            image={item[1].image}
            linkPath={"/"}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableSlider;
