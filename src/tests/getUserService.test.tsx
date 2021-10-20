import axios from "axios";
import getUserList from "../common/userServices/getUserDetails";
import { actionType } from "../store/types";

jest.mock("axios", () => jest.fn());

describe("view user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#getUserAPI", () => {
    const mockApiResponse = {
      type: actionType.GeUserDetails_Success,
      payload: {
        resumeDetails: {
          data: [
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
        },
      },
    };

    describe("Unit test", () => {
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          data: {
            data: [
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
          },
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await getUserList(store.dispatch);
        expect(axios).toBeCalledWith({
          method: "get",
          url: "http://localhost:5000/resumeDetails",
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("getUser failed action test", () => {
    const mockApiResponse = { type: actionType.GetUserDetails_Failed };
    it("should dispatch api getuser failed action", async () => {
      const store = {
        dispatch: jest.fn(),
        getState: jest.fn(),
      };
      const mResponse = {};
      (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
      await getUserList(store.dispatch);
      expect(axios).toBeCalledWith({
        method: "get",
        url: "http://localhost:5000/resumeDetails",
      });
      expect(store.dispatch).toBeCalledWith(mockApiResponse);
      expect(axios).toHaveBeenCalledTimes(1);
    });
  });
});
