import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BuildUserResume from "../containers/buildUserResume/buildResume";
import UserPersonalDetails from "../containers/userDetails/personalDetails";
import UserProfessionalDetails from "../containers/userProfessionalDetails/professionalDetails";

export const Navigation = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/professionaldetails"
        component={UserProfessionalDetails}
      />
      <Route exact path="/userdetails" component={UserPersonalDetails} />
      <Route exact path="/usercheckout" component={BuildUserResume} />
      <Route path="*" component={BuildUserResume} />
    </Switch>
  </Router>
);
