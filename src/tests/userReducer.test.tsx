import reducer from "../store/reducer/userReducer";
import { actionType } from "../store/types";

describe("user reducer", () => {
  describe("save users details reducer", () => {
    it("save user reducer expected state", () => {
      const reqUserData = {
        user: [
          {
            firstName: "kk",
            lastName: "k",
            address1: "k",
            city: "kk",
            zipcode: "90909",
            country: "ll",
            qualification: "kk",
            totalExperience: "k",
            relevantExperience: "k",
            skills: "kk",
            currentOrgDetails: "k",
            state: "k",
            id: 1,
          },
        ],
      };
      const action = {
        payload: reqUserData,
        type: actionType.UserDetails_Success,
      };

      const updatedState = reducer(undefined, action);
      expect(updatedState.users).toHaveLength(1);
      expect(updatedState.users).toEqual(reqUserData.user);
    });
  });

  describe("get users details reducer", () => {
    it("get user reducer expected state", () => {
      const reqUserData = {
        user: [
          {
            firstName: "kk",
            lastName: "k",
            address1: "k",
            city: "kk",
            zipcode: "90909",
            country: "ll",
            qualification: "kk",
            totalExperience: "k",
            relevantExperience: "k",
            skills: "kk",
            currentOrgDetails: "k",
            state: "k",
            id: 1,
          },
        ],
      };
      const action = {
        payload: reqUserData,
        type: actionType.GeUserDetails_Success,
      };
      const updatedState = reducer(undefined, action);
      expect(updatedState.users.user).toHaveLength(1);
      expect(updatedState.users.user).toEqual(reqUserData.user);
    });
  });

  it("save users reducer failed state", () => {
    const failedAction = {
      type: actionType.UserDetails_Failed,
    };
    const updatedState = reducer(undefined, failedAction);
    expect(updatedState).toEqual({});
  });

  it("get users reducer failed state", () => {
    const failedAction = {
      type: actionType.GetUserDetails_Failed,
    };
    const updatedState = reducer(undefined, failedAction);
    expect(updatedState).toEqual({});
  });

  test("is correct", () => {
    const action = { type: "dummy_action" };
    const initialState: any = [];
    const updatedState = reducer(undefined, action);
    expect(updatedState.users).toEqual(initialState);
  });
});
