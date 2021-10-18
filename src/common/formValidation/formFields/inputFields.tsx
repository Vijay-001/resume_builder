import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

export default function InputField(props: any) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      helperText={renderHelperText()}
      {...field}
      {...rest}
      variant="standard"
      fullWidth
    />
  );
}
