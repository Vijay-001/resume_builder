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

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [qualification.name]: "",
  [totalExperience.name]: "",
  [relevantExperience.name]: "",
  [skills.name]: "",
  [currentOrgDetails.name]: "",
};
