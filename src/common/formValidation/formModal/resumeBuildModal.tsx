export default {
  formId: "resumeBuildForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "First name*",
      requiredErrorMsg: "First name is required",
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      requiredErrorMsg: "Last name is required",
    },
    address1: {
      name: "address1",
      label: "Address Line 1*",
      requiredErrorMsg: "Address Line 1 is required",
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    state: {
      name: "state",
      label: "State/Province/Region",
    },
    zipcode: {
      name: "zipcode",
      label: "Zipcode*",
      requiredErrorMsg: "Zipcode is required",
      invalidErrorMsg: "Zipcode is not valid (e.g. 70000)",
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
    },
    qualification: {
      name: "qualification",
      label: "Qualification*",
      requiredErrorMsg: "Qualification is required",
    },
    totalExperience: {
      name: "totalExperience",
      label: "Total Experience*",
      requiredErrorMsg: "Total Experience is required",
    },
    relevantExperience: {
      name: "relevantExperience",
      label: "Relevant Experience*",
      requiredErrorMsg: "Relevant Experience is required",
    },
    skills: {
      name: "skills",
      label: "Skills*",
      requiredErrorMsg: "Skills is required",
    },
    currentOrgDetails: {
      name: "currentOrgDetails",
      label: "Current Orgnization Details*",
      requiredErrorMsg: "Current Orgnization Details is required",
    },
  },
};
