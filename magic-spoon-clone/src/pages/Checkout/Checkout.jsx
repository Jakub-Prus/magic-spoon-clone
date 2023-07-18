import { useSelector, useDispatch } from "react-redux";
import { selectTotalPriceInShoppingCart } from "../../redux/shoppingCartSlice";
import {
  selectShowOrderSummary,
  updateShowOrderSummary,
} from "../../redux/checkoutSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormHelperText, TextField } from "@mui/material";

import {
  usa_states,
  australia_states,
  canada_provinces,
} from "../../data/orderSummaryStates";

const Checkout = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPriceInShoppingCart);
  const showOrderSummary = useSelector(selectShowOrderSummary);
  const [countryValue, setCountryValue] = useState("United States");
  const [statesValue, setStatesValue] = useState(usa_states);
  const [state, setState] = useState("");
  const [postalCodeRegex, setPostalCodeRegex] = useState(/(^d{5}$)|(^d{5}-d{4}$)/);
  const [postalCodeRegexString, setPostalCodeRegexString] = useState("");
  const [isValidPostalCode, setIsValidPostalCode] = useState(true);
  const [partOfCheckout, setPartOfCheckout] = useState("checkout");
  const [isFormValid, setIsFormValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isSuburbValid, setIsSuburbValid] = useState(true);
  const [isStateValid, setIsStateValid] = useState(true);
  const [isPostcodeValid, setIsPostcodeValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [suburbValue, setSuburbValue] = useState("");
  const [postcodeValue, setPostcodeValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const states = [usa_states, australia_states, canada_provinces];

  const country_region = [
    {
      value: "United States",
      label: "United States",
      regions: "usa_states",
      postalCodeRegex: /^\d{5}(-\d{4})?$/,
      postalCodeRegexString: "^d{5}(-d{4})?$",
    },
    {
      value: "Australia",
      label: "Australia",
      regions: "australia_states",
      postalCodeRegex: /^[0-9]{4}$/,
      postalCodeRegexString: "^[0-9]{4}$",
    },
    {
      value: "Canada",
      label: "Canada",
      regions: "canada_provinces",
      postalCodeRegex: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
      postalCodeRegexString: "^[A-Za-z]d[A-Za-z] d[A-Za-z]d$",
    },
  ];

  const validateField = (fieldValue, setState) => {
    if (!fieldValue.trim()) {
      setState(false);
      return false;
    }

    setState(true);
    return true;
  };

  const handleContinueButtonClick = () => {
    let isValid = true;

    isValid = validateField(emailValue, setIsEmailValid) && isValid;
    isValid = validateField(firstNameValue, setIsFirstNameValid) && isValid;
    isValid = validateField(lastNameValue, setIsLastNameValid) && isValid;
    isValid = validateField(addressValue, setIsAddressValid) && isValid;
    isValid = validateField(suburbValue, setIsSuburbValid) && isValid;
    isValid = validateField(postcodeValue, setIsPostcodeValid) && isValid;
    isValid = validateField(phoneValue, setIsPhoneValid) && isValid;

    if (isValid) {
      setPartOfCheckout("shipping");
    } else {
      setIsFormValid(false);
      console.log("Please fill in all required fields.");
    }
  };

  const handleInputCountryChange = (event) => {
    setCountryValue(event.target.value);
    const countryElementIndex = country_region.findIndex(
      (element) => element.value === event.target.value
    );

    setStatesValue(states[countryElementIndex]);
    setPostalCodeRegex(country_region[countryElementIndex].postalCodeRegex);
    setPostalCodeRegexString(country_region[countryElementIndex].postalCodeRegexString);
  };

  const handleInputStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePostCodeChange = (event) => {
    const inputValue = event.target.value;
    const regex = postalCodeRegex;
    console.log("Input Value:", inputValue);
    console.log("Regex Test Result:", regex.test(inputValue));

    setIsValidPostalCode(regex.test(inputValue));
    setPostcodeValue(inputValue);
    validateField(inputValue, setIsPostcodeValid);
  };

  return (
    <div className="flex w-full flex-col items-center">
      {partOfCheckout === "checkout" && (
        <div className="w-full">
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
            onClick={() => dispatch(updateShowOrderSummary())}
          >
            <div className="text-purple">
              <ShoppingCartIcon style={{ color: "#3f0791" }} className="" />
              <span className="ml-2 text-sm font-light">Show order summary</span>
              <KeyboardArrowDownIcon
                className={`${showOrderSummary ? "rotate-180 transform" : ""}`}
              />
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
                  Already have an account?{" "}
                  <span className="ml-1 text-purple">Log in</span>
                </span>
              </div>
              <TextField
                required
                id="outlined-basic"
                label="Email"
                value={emailValue}
                size="small"
                className="my-4 w-full"
                error={!isEmailValid}
                helperText={!isEmailValid && "Please enter a valid email."}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmailValue(value);
                  validateField(value, setIsEmailValid);
                }}
              />
              <span className="text-lg font-normal">Shipping address</span>
              <TextField
                required
                id="outlined-basic"
                value={countryValue}
                select
                label="Country/region"
                size="small"
                className="mt-4 w-full"
                onChange={handleInputCountryChange}
              >
                {country_region.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="outlined-basic"
                label="First name"
                value={firstNameValue}
                size="small"
                className="mt-4 w-full"
                error={!isFirstNameValid}
                helperText={!isFirstNameValid && "Please enter your first name."}
                onChange={(e) => {
                  const value = e.target.value;
                  setFirstNameValue(value);
                  validateField(value, setIsFirstNameValid);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                value={lastNameValue}
                label="Last name"
                size="small"
                className="mt-4 w-full"
                error={!isLastNameValid}
                helperText={!isLastNameValid && "Please enter your last name."}
                onChange={(e) => {
                  const value = e.target.value;
                  setLastNameValue(value);
                  validateField(value, setIsLastNameValid);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Company (optional)"
                size="small"
                className="mt-4 w-full"
              />
              <TextField
                required
                id="outlined-basic"
                value={addressValue}
                label="Address"
                size="small"
                className="mt-4 w-full"
                error={!isAddressValid}
                helperText={!isAddressValid && "Please enter your address."}
                onChange={(e) => {
                  const value = e.target.value;
                  setAddressValue(value);
                  validateField(value, setIsAddressValid);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Apartment, suite, etc. (optional)"
                size="small"
                className="mt-4 w-full"
              />
              <TextField
                required
                id="outlined-basic"
                value={suburbValue}
                label="Suburb"
                size="small"
                className="mt-4 w-full"
                error={!isSuburbValid}
                helperText={!isSuburbValid && "Please enter your suburb."}
                onChange={(e) => {
                  const value = e.target.value;
                  setSuburbValue(value);
                  validateField(value, setIsSuburbValid);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                select
                value={state}
                label="State/territory"
                size="small"
                className="mt-4 w-full"
                onChange={handleInputStateChange}
                error={!isStateValid}
                helperText={!isStateValid && "Please enter your state."}
              >
                {statesValue.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <FormControl error={!isValidPostalCode} className="mt-4 w-full">
                <TextField
                  required
                  id="outlined-basic"
                  label="Postcode"
                  value={postcodeValue}
                  InputProps={{ inputProps: { pattern: postalCodeRegexString } }}
                  size="small"
                  onChange={handlePostCodeChange}
                  error={!isPostcodeValid}
                  helperText={!isPostcodeValid && "Please enter your postcode."}
                />
                {!isValidPostalCode && (
                  <FormHelperText>Please enter a valid postal code.</FormHelperText>
                )}
              </FormControl>
              <TextField
                required
                id="outlined-basic"
                value={phoneValue}
                label="Phone"
                size="small"
                className="mt-4 w-full"
                error={!isPhoneValid}
                helperText={!isPhoneValid && "Please enter your phone."}
                onChange={(e) => {
                  const value = e.target.value;
                  setPhoneValue(value);
                  validateField(value, setIsPhoneValid);
                }}
              />

              <button
                className="mt-4 h-16 w-full rounded-md bg-[#5b00ed] text-white"
                onClick={handleContinueButtonClick}
              >
                Continue to shipping
              </button>
              {!isFormValid && (
                <span className="w-full text-center text-sm text-red-600">
                  Please fill in all required fields.
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
