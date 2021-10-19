import axios from "axios";
import { Dispatch } from "react";
import { ActionCreator } from "../../store/action/actionCreator";

const getUserList = async (dispatch: Dispatch<any>): Promise<void> => {
  await axios({ url: "http://localhost:5000/resumeDetails", method: "get" })
    .then((res) => {
      if (!res.data) {
        dispatch(ActionCreator.getUserDetailsFailed());
      } else {
        dispatch(ActionCreator.getUserDetailsSuccess(res.data));
      }
    })
    .catch(() => {
      dispatch(ActionCreator.getUserDetailsFailed());
    });
};

export default getUserList;
