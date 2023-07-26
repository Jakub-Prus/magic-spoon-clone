import { Avatar } from "@mui/material";

const ShopDetailedImages = ({ product }) => {
  const absolutePath = "assets/img/store/detailed-img/";

  let detailedPictures = [];
  for (let i = 1; i <= 5; i++) {
    detailedPictures.push(
      <Avatar
        src={absolutePath + product + i + ".webp"}
        alt=""
        key={i}
        sx={{ width: 54, height: 54 }}
        className="border-2 border-purple"
      />
    );
  }
  return <div className="flex flex-row items-center gap-3">{detailedPictures}</div>;
};

export default ShopDetailedImages;
