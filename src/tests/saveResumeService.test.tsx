import axios from "axios";
import saveResumeDetails from "../common/userServices/saveResume";
import { actionType } from "../store/types";

jest.mock("axios", () => jest.fn());

describe("Signup user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#saveUserResume api test", () => {
    const mockApiResponse = {
      type: "UserDetails_Success",
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
    };

    describe("saveUserResume api test", () => {
      const userPayload = {
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
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          data: {
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
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await saveResumeDetails(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/resumeDetails",
          method: "post",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("#save user details failed due network error or url", () => {
    const mockApiResponse = { type: actionType.UserDetails_Failed };

    describe("#save user details  failed due network error or url", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "evelllll",
        avatar: "",
        password: "pistol",
      };
      it("should dispatch api failed action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          userdata: {
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
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await saveResumeDetails(userPayload)(store.dispatch);
        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/resumeDetails",
          method: "post",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("#user save details with wrong or empty payload", () => {
    const mockApiResponse = { type: actionType.UserDetails_Failed };

    describe("UserDetials_Failed", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "evelllll",
        avatar: "",
        password: "pistol",
      };
      it("#user details with wrong or empty payload", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {};
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await saveResumeDetails(userPayload)(store.dispatch);
        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/resumeDetails",
          method: "post",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});
