import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import App from "../App";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<App/>", () => {
  const Component = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
