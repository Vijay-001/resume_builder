import configureMockStore from "redux-mock-store";
import { ActionCreator } from "../store/action/actionCreator";
import { actionType } from "../store/types";

describe("user actions", () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  describe("save resume details action", () => {
    it("save resume details action", () => {
      const reqUserData = {
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
      };
      const expectedActions = [
        {
          type: actionType.UserDetails_Success,
          payload: {
            resumeDetails: {
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
          },
        },
      ];
      store.dispatch(ActionCreator.userDetailsSuccess(reqUserData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("get user details action", () => {
    it("get user details action", () => {
      const reqUserData = [
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
      ];

      const expectedActions = [
        {
          payload: {
            resumeDetails: [
              {
                address1: "k",
                city: "kk",
                country: "ll",
                currentOrgDetails: "k",
                firstName: "kk",
                id: 1,
                lastName: "k",
                qualification: "kk",
                relevantExperience: "k",
                skills: "kk",
                state: "k",
                totalExperience: "k",
                zipcode: "90909",
              },
            ],
          },
          type: "GetUserDetails_Success",
        },
      ];
      store.dispatch(ActionCreator.getUserDetailsSuccess(reqUserData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("save user details failed action", () => {
    it("should dispatch the  user failed action", () => {
      const expectedActions = [
        {
          type: actionType.UserDetails_Failed,
        },
      ];
      store.dispatch(ActionCreator.userDetailsFailed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("get user failed actions", () => {
    it("should dispatch the get user failed action", () => {
      const expectedActions = [
        {
          type: actionType.GetUserDetails_Failed,
        },
      ];
      store.dispatch(ActionCreator.getUserDetailsFailed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
