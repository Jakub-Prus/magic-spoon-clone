const GalleryItem = ({ imgPath }) => {
  return (
    <div className="align-left relative -mb-2 inline-block h-48 w-1/2 p-0 md:h-96 md:w-1/4">
      <img src={imgPath} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

export default GalleryItem;
