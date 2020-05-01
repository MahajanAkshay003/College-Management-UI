import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import StudentSearchContainer from "./StudentSearch";
import StudentTableSectionContainer from "./StudentTableSectionContainer";

const TrainingPlacementCellDashboard = props => {
  const [ activeStep, setActiveStep ] = useState(1);
  const showPanelByActiveStep = () => {
    switch (activeStep) {
      case 0: return <StudentSearchContainer />;
      case 1: return <StudentTableSectionContainer />;
    }
  }
  return (
    <Grid container>
      {showPanelByActiveStep()}
    </Grid>
  );
}

export default TrainingPlacementCellDashboard;