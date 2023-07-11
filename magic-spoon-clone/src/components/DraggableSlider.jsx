import DraggableGalleryItem from "./DraggableGalleryItem";
import { cerealsFlavors } from "../data/cerealFlavors";

const DraggableSlider = () => {
  return (
    <div className="md:max -mt-4 flex h-56 w-full flex-col items-center justify-center bg-[#dad9ff] text-purple md:h-80">
      <h2 className="mb-4 text-2xl font-bold md:text-4xl">Find Your Flavor</h2>
      {/* <div className="relative w-full pb-8 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-20 before:w-6 before:bg-gradient-to-r before:from-purple before:to-transparent before:opacity-40"> */}
      <div className="w-full overflow-hidden">
        <div className="scrollbar-hide no-scrollbar mx-auto flex w-full flex-row overflow-x-scroll last:mr-40 md:grow">
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
