import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../../common/formValidation/formFields/inputFields";
import { useState } from "react";
import { UserDetails } from "../../common/userInterface/userDetails";

export default function UserPersonalDetails(props: any) {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      city,
      state,
      zipcode,
      country,
    },
  } = props;

    const [userInfoState, setUserInfoState] = useState({});
  const setUserDetails = (fieldName: string, value: string) => {
    setUserInfoState({
      ...userInfoState,
      [fieldName]: value,
    });
  };

  return (
    <React.Fragment>
      <p></p>
      <p></p>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField
            name={firstName.name}
            label={firstName.label}
            onChange={(event: any) => {
              setUserDetails("firstName", event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={lastName.name}
            label={lastName.label}
            onChange={(event: any) => {
              setUserDetails("lastName", event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={address1.name}
            label={address1.label}
            onChange={(event: any) => {
              setUserDetails("address1", event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={state.name}
            label={state.label}
            onChange={(event: any) => {
              setUserDetails("state", event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={city.name}
            label={city.label}
            onChange={(event: any) => {
              setUserDetails("city", event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={country.name}
            label={country.label}
            onChange={(event: any) => {
              setUserDetails("country", event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={zipcode.name}
            label={zipcode.label}
            onChange={(event: any) => {
              setUserDetails("zipcode", event.target.value);
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
