import axios from "axios";
import { Dispatch } from "react";
import { ActionCreator } from "../../store/action/actionCreator";

const saveResumeDetails =
  (values: any) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    await axios({
      url: "http://localhost:5000/resumeDetails",
      method: "post",
      data: values,
    })
      .then((res: any) => {
        if (!res.data) {
          dispatch(ActionCreator.userDetailsFailed());
        } else {
          dispatch(ActionCreator.userDetailsSuccess(res.data));
        }
      })
      .catch(() => {
        dispatch(ActionCreator.userDetailsFailed());
      });
  };

export default saveResumeDetails;
