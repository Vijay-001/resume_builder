import * as Yup from "yup";
import resumeBuildModal from "./resumeBuildModal";
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    qualification,
    totalExperience,
    relevantExperience,
    skills,
    currentOrgDetails,
  },
} = resumeBuildModal;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [zipcode.name]: Yup.number().required(`${zipcode.requiredErrorMsg}`),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
    [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [qualification.name]: Yup.string().required(
      `${qualification.requiredErrorMsg}`
    ),
    [totalExperience.name]: Yup.string().required(
      `${totalExperience.requiredErrorMsg}`
    ),
    [relevantExperience.name]: Yup.string().required(
      `${relevantExperience.requiredErrorMsg}`
    ),
    [skills.name]: Yup.string().required(`${skills.requiredErrorMsg}`),
    [currentOrgDetails.name]: Yup.string().required(
      `${currentOrgDetails.requiredErrorMsg}`
    ),
  }),
];
