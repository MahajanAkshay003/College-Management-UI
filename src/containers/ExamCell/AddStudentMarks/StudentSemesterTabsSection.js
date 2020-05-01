import React, { useState } from 'react';
import { Grid, Tabs, Tab, AppBar } from "@material-ui/core";
import StudentSemesterTabMarksPanel from "./StudentSemesterTabMarksPanel";

const StudentSemesterTabSection = props => {
  const semestersList = [1, 2, 3, 4, 5, 6, 7, 8];
  const [ currentTab, setCurrentTab ] = useState(0);
  const handleChange = (event, newValue) => setCurrentTab(newValue);
  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static" color="default">
          <Tabs
            value={currentTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
          >
            {semestersList.map((semester, index) => {
              return <Tab key={index} label={`${semester} Semester`} />
            })}
          </Tabs>
        </AppBar>
        <StudentSemesterTabMarksPanel currentTab={currentTab} />
      </Grid>
    </Grid>
  );
}

export default StudentSemesterTabSection;