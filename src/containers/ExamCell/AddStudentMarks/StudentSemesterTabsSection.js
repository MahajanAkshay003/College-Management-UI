import React, { useState } from 'react';
import { Grid, Tabs, Tab, AppBar } from "@material-ui/core";
import StudentSemesterTabMarksPanel from "./StudentSemesterTabMarksPanel";

const StudentSemesterTabSection = props => {
  const { setSemester, semester, subjects, student } = props;
  const semestersList = new Array(semester).fill().map((value, index) => (index + 1))
  const [ currentTab, setCurrentTab ] = useState(0);
  const handleChange = (event, newValue) => {
    setSemester((newValue + 1).toString());
    setCurrentTab(newValue);
  }
  return (
    <Grid container>
      {student &&
        <Grid item xs={12} style={{ marginTop: -16 }}>
          <AppBar position="static" color="default">
            <Tabs
              value={currentTab}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {semestersList.map((semester, index) => {
                return <Tab key={index} label={`${semester} Semester`} />
              })}
            </Tabs>
          </AppBar>
          <StudentSemesterTabMarksPanel
            currentTab={currentTab}
            subjects={subjects}
            marks={student.marks}
            semester={semester}
          />
        </Grid>
      }
    </Grid>
  );
}

export default StudentSemesterTabSection;