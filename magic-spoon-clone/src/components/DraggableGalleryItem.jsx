import { Link } from "react-router-dom";

const DraggableGalleryItem = ({ title, image, linkPath }) => {
  return (
    <Link to={linkPath} className="flex flex-col items-center">
      <img src={image} alt={title} className="w-28" />
      <h3 className="text-sm">{title}</h3>
    </Link>
  );
};

export default DraggableGalleryItem;
