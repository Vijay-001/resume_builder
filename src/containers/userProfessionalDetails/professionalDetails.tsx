import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../../common/formValidation/formFields/inputFields";

export default function UserProfessionalDetails(props: any) {
  const {
    formField: {
      qualification,
      totalExperience,
      relevantExperience,
      skills,
      currentOrgDetails,
    },
  } = props;
  return (
    <React.Fragment>
      <p></p>
      <p></p>
      <Typography variant="h6" gutterBottom>
        Professional Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField
            name={qualification.name}
            label={qualification.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={totalExperience.name}
            label={totalExperience.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={relevantExperience.name}
            label={relevantExperience.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={skills.name} label={skills.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={currentOrgDetails.name}
            label={currentOrgDetails.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
