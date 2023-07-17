import { useSelector } from "react-redux";
import { selectTotalPriceInShoppingCart } from "../../redux/shoppingCartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  usa_states,
  australia_states,
  canada_provinces,
} from "../../data/orderSummaryStates";

const Checkout = () => {
  const totalPrice = useSelector(selectTotalPriceInShoppingCart);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [countryValue, setCountryValue] = useState("United States");
  const [statesValue, setStatesValue] = useState(usa_states);
  const [state, setState] = useState("");
  const states = [usa_states, australia_states, canada_provinces];

  const country_region = [
    {
      value: "United States",
      label: "United States",
      regions: "usa_states",
    },
    {
      value: "Australia",
      label: "Australia",
      regions: "australia_states",
    },
    {
      value: "Canada",
      label: "Canada",
      regions: "canada_provinces",
    },
  ];

  const handleInputCountryChange = (event) => {
    setCountryValue(event.target.value);
    const countryElementIndex = country_region.findIndex(
      (element) => element.value === event.target.value
    );

    setStatesValue(states[countryElementIndex]);
  };
  const handleInputStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-center bg-[url('src/assets/img/checkout/background-baner.png')] bg-cover">
        <Link to="/">
          <img
            src="src/assets/img/checkout/white-logo.webp"
            alt=""
            className="my-6 max-h-11"
          />
        </Link>
      </div>
      <div
        className="flex w-[90%] flex-row items-center justify-between  bg-[#fafafa] py-4"
        onClick={() => setShowOrderSummary(!showOrderSummary)}
      >
        <div className="text-purple">
          <ShoppingCartIcon style={{ color: "#3f0791" }} className="" />
          <span className="ml-2 text-sm font-light">Show order summary</span>
          <KeyboardArrowDownIcon />
        </div>
        <span className="text-lg">{"$" + (totalPrice / 100).toFixed(2)}</span>
      </div>
      <span className="w-full border-b-[1px] border-b-gray-300"></span>
      <div className="relative w-full">
        <CheckoutOrderSummary showOrderSummary={showOrderSummary} />
      </div>
      <div
        className={`${
          showOrderSummary ? "translate-y-[500px]" : ""
        } flex w-full flex-col items-center transition-transform duration-300 ease-in-out`}
      >
        <div className="mt-6 w-[90%]">
          <div className="flex w-full flex-row items-center justify-between">
            <span className="text-lg font-normal">Contact</span>
            <span className="flex flex-row items-center justify-between text-sm font-light">
              Already have an account? <span className="ml-1 text-purple">Log in</span>
            </span>
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            size="small"
            className="my-4 w-full"
          />
          <span className="text-lg font-normal">Shipping address</span>
          <TextField
            id="outlined-basic"
            value={countryValue}
            select
            label="Country/region"
            size="small"
            className="mt-3 w-full"
            onChange={handleInputCountryChange}
          >
            {country_region.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="First name"
            size="small"
            className="mt-3 w-full"
          />
          <TextField
            id="outlined-basic"
            label="Last name"
            size="small"
            className="mt-3 w-full"
          />
          <TextField
            id="outlined-basic"
            label="Company (optional)"
            size="small"
            className="mt-3 w-full"
          />
          <TextField
            id="outlined-basic"
            label="Address"
            size="small"
            className="mt-3 w-full"
          />
          <TextField
            id="outlined-basic"
            label="Apartment, suite, etc. (optional)"
            size="small"
            className="mt-3 w-full"
          />
          <TextField
            id="outlined-basic"
            label="Suburb"
            size="small"
            className="mt-3 w-full"
          />
          <TextField
            id="outlined-basic"
            select
            value={state}
            label="State/territory"
            size="small"
            className="mt-3 w-full"
            onChange={handleInputStateChange}
          >
            {statesValue.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Postcode"
            size="small"
            className="mt-3 w-full"
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            size="small"
            className="mt-3 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
