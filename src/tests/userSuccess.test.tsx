import UserCheckout from "../containers/userSuccess/successPage";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<BuildUserResume/>", () => {
  const Component = () => (
    <Provider store={store}>
      <UserCheckout />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders default state values", () => {
    const { getByTestId } = render(<Component />);
    const downloadButton = getByTestId("downloadButton");
    fireEvent.click(downloadButton);
  });
});
