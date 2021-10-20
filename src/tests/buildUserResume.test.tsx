import BuildUserResume from "../containers/buildUserResume/buildResume";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<BuildUserResume/>", () => {
  const Component = () => (
    <Provider store={store}>
      <BuildUserResume />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
