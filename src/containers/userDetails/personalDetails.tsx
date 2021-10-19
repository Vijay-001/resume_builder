import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../../common/formValidation/formFields/inputFields";

export default function UserPersonalDetails(props: any) {
  const {
    formField: { firstName, lastName, address1, city, state, zipcode, country },
  } = props;

  return (
    <React.Fragment>
      <p></p>
      <p></p>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={state.name} label={state.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={country.name} label={country.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
