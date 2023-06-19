import gallery1 from "../assets/img/gallery/gallery1.jpg";
import gallery2 from "../assets/img/gallery/gallery2.jpg";
import gallery3 from "../assets/img/gallery/gallery3.jpg";
import gallery4 from "../assets/img/gallery/gallery4.jpg";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section className="w-full">
      <GalleryItem imgPath={gallery1} />
      <GalleryItem imgPath={gallery2} />
      <GalleryItem imgPath={gallery3} />
      <GalleryItem imgPath={gallery4} />
    </section>
  );
};

export default Gallery;
