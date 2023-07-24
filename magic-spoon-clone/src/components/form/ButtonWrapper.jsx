import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...otherProps,
    variant: "contained",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button {...configButton} style={{ backgroundColor: "#5b00ed", height: "4rem" }}>
      {children}
    </Button>
  );
};
