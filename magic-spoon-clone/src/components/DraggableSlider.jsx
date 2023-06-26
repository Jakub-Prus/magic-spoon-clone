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
    {
      id: 2,
      title: "Peanut Butter",
      image: "src/assets/img/cereal-flavors/cereal-peanut-butter.png",
    },
    {
      id: 3,
      title: "Cocoa",
      image: "src/assets/img/cereal-flavors/cereal-cocoa.png",
    },
    {
      id: 4,
      title: "Cinnamon Roll",
      image: "src/assets/img/cereal-flavors/cereal-cinnamon-roll.png",
    },
    {
      id: 5,
      title: "Frosted",
      image: "src/assets/img/cereal-flavors/cereal-frosted.png",
    },
    {
      id: 6,
      title: "Blueberry Muffin",
      image: "src/assets/img/cereal-flavors/cereal-blueberry-muffin.png",
    },
    {
      id: 7,
      title: "Maple Waffle",
      image: "src/assets/img/cereal-flavors/cereal-maple-waffle.png",
    },
    {
      id: 8,
      title: "Birthday Cake",
      image: "src/assets/img/cereal-flavors/cereal-birthday-cake.png",
    },
  ];

  return (
    <div className="-mt-4 flex h-56 w-full flex-col items-center justify-center bg-[#dad9ff] text-purple ">
      <h2 className="mb-4 text-2xl font-bold">Find Your Flavor</h2>
      {/* <div className="relative w-full pb-8 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-20 before:w-6 before:bg-gradient-to-r before:from-purple before:to-transparent before:opacity-40"> */}
      <div className="w-full overflow-hidden">
        <div className="scrollbar-hide no-scrollbar mx-auto flex w-full flex-row overflow-x-scroll last:mr-40">
          {cerealsFlavors.map((item) => (
            <DraggableGalleryItem
              key={item.id}
              title={item.title}
              image={item.image}
              linkPath={"/"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraggableSlider;
