import { actionType } from "../types";

export const ActionCreator = {
  userDetailsSuccess: (resumeDetails: any) => ({
    type: actionType.UserDetails_Success,
    payload: { resumeDetails },
  }),
  userDetailsFailed: (resumeDetails: any) => ({
    type: actionType.UserDetails_Failed,
    payload: { resumeDetails },
  }),
};
