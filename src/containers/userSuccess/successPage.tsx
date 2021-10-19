import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import getUserDetails from "../../common/userServices/getUserDetails";
import { IStateReduced } from "../../store";
import jsPDF from "jspdf";

function UserCheckout(userState: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetails(dispatch);
  }, [dispatch]);

  async function downloadObjectAsJson() {
    const doc = new jsPDF();
    doc.text(`${userState.userState}`, 10, 10);
    doc.text(`${userState.userState}`, 10, 10);
    doc.save("a4.pdf");
  }

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for build resume.
      </Typography>
      <Button onClick={downloadObjectAsJson}>Download</Button>
    </React.Fragment>
  );
}

const mapStateToProps = (state: IStateReduced) => ({
  userState: state?.users,
});

export default connect(mapStateToProps)(UserCheckout);
