import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function UserProfessionalDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Professinal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Qualification"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Expierence"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="expDate"
            label="Current Orgnization Details"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            multiline
            minRows={2}
            maxRows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="expDate"
            label="Skills & Certifications"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            multiline
            minRows={2}
            maxRows={4}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
