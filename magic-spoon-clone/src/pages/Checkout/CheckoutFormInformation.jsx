import { Grid, Container } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextfieldWrapper } from "../../components/form/TextfieldWrapper";
import { SelectWrapper } from "../../components/form/SelectWrapper";
import { ButtonWrapper } from "../../components/form/ButtonWrapper";
import USStates from "../../data/USStates.json";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCheckoutInformation,
  updateCheckoutInformation,
  updatePartOfCheckout,
} from "../../redux/checkoutSlice";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";

const CheckoutFormInformation = () => {
  const dispatch = useDispatch();
  const checkoutInformation = useSelector(selectCheckoutInformation);

  const INITIAL_FORM_STATE =
    Object.keys(checkoutInformation).length === 0
      ? {
          email: "",
          firstName: "",
          lastName: "",
          country: "United States",
          company: "",
          address: "",
          apartment: "",
          suburb: "",
          state: "",
          zipcode: "",
          phone: "",
        }
      : checkoutInformation;

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email("Invalid email.").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    suburb: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zipcode: Yup.string()
      .required("Required")
      .matches(/^\d{5}(-\d{4})?$/, "Invalid postal code"),
    phone: Yup.number().typeError("Please enter a valid phone number"),
  });

  return (
    <div className="mt-4 w-full">
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
                dispatch(updateCheckoutInformation(values));
                dispatch(updatePartOfCheckout("shipping"));
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextfieldWrapper name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper
                      value="United States"
                      name="country"
                      label="Country"
                      disabled
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextfieldWrapper name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextfieldWrapper name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper name="company" label="Company(optional)" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper name="address" label="Address" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextfieldWrapper
                      name="apartment"
                      label="Apartment, suite, etc. (optional)"
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextfieldWrapper name="suburb" label="Suburb" />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <SelectWrapper name="state" label="State" options={USStates} />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper name="zipcode" label="Zipcode" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={12}>
                    <ButtonWrapper>Continue to shipping</ButtonWrapper>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
      <Link to="/">
        <div className="mt-4 flex cursor-pointer flex-row items-center justify-center text-purple">
          <KeyboardArrowLeftIcon />
          Return to cart
        </div>
      </Link>
    </div>
  );
};

export default CheckoutFormInformation;
