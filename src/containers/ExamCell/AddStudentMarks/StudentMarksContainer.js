import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import StudentBasicProfile from "./StudentBasicProfile";
import StudentSemesterTabSection from "./StudentSemesterTabsSection";

const StudentMarksContainer = props => {
  return (
    <Grid container justify={"center"}>
      <Grid item xs={12}>
        <StudentBasicProfile />
      </Grid>
      <Grid item xs={11}>
        <StudentSemesterTabSection />
      </Grid>
    </Grid>
  );
}

export default StudentMarksContainer;