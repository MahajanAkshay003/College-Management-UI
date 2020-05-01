import React from 'react';
import { Grid } from "@material-ui/core";
import FacultyFilters from "./FacultyFilters";
import FacultyTable from "./FacultyTable";

const FacultyAttendancePanelContainer = props => {
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
        <FacultyFilters />
      </Grid>
      <Grid item xs={12}>
        <FacultyTable />
      </Grid>
    </Grid>
  );
}

export default FacultyAttendancePanelContainer;