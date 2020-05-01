import React, { Fragment, useState } from 'react';
import {Grid, Typography, Paper, Stepper, StepLabel, Step, Button} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DashboardDrawer from "../../../components/DashboardDrawer/DashboardDrawer";
import StudentBasicDetailsPanel from "./StudentBasicDetailsPanel";
import StudentParentDetailsPanel from "./StudentParentDetailsPanel";

const AddStudentSection = props => {
  const [ activeStep, setActiveStep ] = useState(0);
  const steps = ["Basic Details", "Parent's Details", "College Details"];
  const renderSectionHeaderByAction = () => {
    if (props.match.params.action === "add") {
      return <Typography variant={"h4"} style={{ fontWeight: 300 }}>
        Add New Student
      </Typography>
    } else if (props.match.params.action === "edit") {
      return <Typography variant={"h4"} style={{ fontWeight: 300 }}>
        Edit Current Student
      </Typography>
    }
  }
  const changePanelByActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <StudentBasicDetailsPanel />;
      case 1:
        return <StudentParentDetailsPanel />;
      case 2:
        return <StudentParentDetailsPanel />;
    }
  }
  return (
      <Grid container>
        <Grid item xs={12} style={{ padding: "8px", marginTop: "8px" }}>
          {changePanelByActiveStep()}
        </Grid>
      </Grid>
  )
};

export default withRouter(AddStudentSection);