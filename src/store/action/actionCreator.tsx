import { actionType } from "../types";

export const ActionCreator = {
  userDetailsSuccess: (resumeDetails: any) => ({
    type: actionType.UserDetails_Success,
    payload: { resumeDetails },
  }),
  userDetailsFailed: () => ({
    type: actionType.UserDetails_Failed,
  }),
  getUserDetailsSuccess: (resumeDetails: any) => ({
    type: actionType.GeUserDetails_Success,
    payload: { resumeDetails },
  }),
  getUserDetailsFailed: () => ({
    type: actionType.GetUserDetails_Failed,
  }),
};
