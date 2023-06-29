import { Link } from "react-router-dom";

const DraggableGalleryItem = ({ title, image, linkPath }) => {
  return (
    <Link
      to={linkPath}
      className="flex-none cursor-pointer flex-col items-center active:cursor-grab"
    >
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="w-28 md:h-auto md:w-[11vw]" />
        <h3 className="text-sm md:text-lg">{title}</h3>
      </div>
    </Link>
  );
};

export default DraggableGalleryItem;
