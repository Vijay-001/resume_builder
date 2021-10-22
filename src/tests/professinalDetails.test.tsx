import Professional from "../containers/userProfessionalDetails/professionalDetails";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import resumeBuildModal from "../common/formValidation/formModal/resumeBuildModal";

const { formField } = resumeBuildModal;

const mockStore = configureMockStore();
const store = mockStore({});

describe("<BuildUserResume/>", () => {
  const Component = () => (
    <Provider store={store}>
      <Professional formField={formField} />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
