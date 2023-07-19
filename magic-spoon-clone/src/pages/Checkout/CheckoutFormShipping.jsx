import { Grid, Container, Typography, MenuItem } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextfieldWrapper } from "../../components/form/TextfieldWrapper";
import {
  usa_states,
  australia_states,
  canada_provinces,
} from "../../data/orderSummaryStates";

const CheckoutFormShipping = () => {
  const INITIAL_FORM_STATE = {
    email: "",
    country: "United States",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    suburb: "",
    state: "",
    postcode: "",
    phone: "",
  };
  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email("Invalid email.").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    suburb: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    postcode: Yup.string().required("Required"),
    phone: Yup.number().typeError("Please enter a valid phone number"),
  });

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

  return (
    <div className="w-full">
      <Grid container>
        <Grid item xs={12}>
          test
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextfieldWrapper name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper name="country" select>
                      {country_region.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextfieldWrapper>
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

                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="apartment"
                      label="Apartment, suite, etc. (optional)"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <TextfieldWrapper name="suburb" label="Suburb" />
                  </Grid>

                  <Grid item xs={4}>
                    <TextfieldWrapper name="state" label="State/territory" select>
                      {states.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextfieldWrapper>
                  </Grid>

                  <Grid item xs={4}>
                    <TextfieldWrapper name="postcode" label="Postcode" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextfieldWrapper name="phone" label="Phone" />
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutFormShipping;
