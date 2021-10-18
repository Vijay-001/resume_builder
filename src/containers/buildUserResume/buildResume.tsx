import * as React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Paper,
  Container,
  CssBaseline,
} from "@mui/material";
import UserProfessionalDetails from "../userProfessionalDetails/professionalDetails";
import UserPersonalDetails from "../userDetails/personalDetails";
import resumeBuildModal from "../../common/formValidation/formModal/resumeBuildModal";
import formInitialValues from "../../common/formValidation/formModal/formInitialValues";
import { Form, Formik } from "formik";
import validationSchema from "../../common/formValidation/formModal/validationSchema";
import { useState } from "react";
import ResumeBuildSuccess from "../resumeBuildSuccess/buildSuccess";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const { formId, formField } = resumeBuildModal;
const steps = ["Personal details", "Professional details", "Review & Download"];

function renderStepContent(step: any) {
  switch (step) {
    case 0:
      return <UserPersonalDetails formField={formField} />;
    case 1:
      return <UserProfessionalDetails formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

const theme = createTheme();

export default function BuildUserResume() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function submitForm(values: any, actions: any) {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function handleSubmit(values: any, actions: any) {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h5" align="center">
            Resume Builder
          </Typography>
          <p></p>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <ResumeBuildSuccess />
            ) : (
              <React.Fragment>
                <Formik
                  initialValues={formInitialValues}
                  validationSchema={currentValidationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form id={formId}>
                      {renderStepContent(activeStep)}

                      <div>
                        {activeStep !== 0 && (
                          <Button onClick={handleBack}>Back</Button>
                        )}
                        <div>
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            {isLastStep ? "Place order" : "Next"}
                          </Button>
                          {isSubmitting && <CircularProgress size={24} />}
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
