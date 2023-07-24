import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePartOfCheckout } from "../../redux/checkoutSlice";

const CheckoutBanner = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center justify-center bg-[url('src/assets/img/checkout/background-baner.png')] bg-cover">
      <Link to="/">
        <img
          src="src/assets/img/checkout/white-logo.webp"
          alt=""
          className="my-6 max-h-11"
          onClick={() => dispatch(updatePartOfCheckout("information"))}
        />
      </Link>
    </div>
  );
};

export default CheckoutBanner;
