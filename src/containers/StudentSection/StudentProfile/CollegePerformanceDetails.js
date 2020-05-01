import React, { useState } from 'react';
import {Tabs, Tab, Paper, Grid, Typography} from "@material-ui/core";

const CollegePerformanceDetails = props => {
  const [ currentValue, setCurrentValue ] = useState(0);
  const showPanelBySemester = () => {
    return <Typography variant={"body1"}>
      This is body 1
    </Typography>
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper>
          <Grid container>
            <Grid item xs={3}>
              <Tabs
                value={currentValue}
                onChange={(event, value) => setCurrentValue(value)}
                indicatorColor="secondary"
                textColor="secondary"
                orientation={"vertical"}
              >
                <Tab label="Semester 1" />
                <Tab label="Semester 2" />
                <Tab label="Semester 3" />
                <Tab label="Semester 4" />
                <Tab label="Semester 5" />
                <Tab label="Semester 6" />
                <Tab label="Semester 7" />
                <Tab label="Semester 8" />
              </Tabs>
            </Grid>
            <Grid item xs={8} style={{ padding: "16px" }}>
              {showPanelBySemester()}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default CollegePerformanceDetails;