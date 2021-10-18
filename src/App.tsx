import { HashRouter } from "react-router-dom";
import { Navigation } from "./navigation/route";

const App = () => (
  <HashRouter>
    <div>
      <Navigation />
    </div>
  </HashRouter>
);

export default App;
