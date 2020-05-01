import React from 'react';
import { Grid } from "@material-ui/core";
import StudentFilters from "./StudentFilters";
import StudentActions from "./StudentActions";
import StudentsTable from "./StudentsTable";

const StudentTableSectionContainer = props => {
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
        <StudentFilters />
      </Grid>
      <Grid item xs={12} style={{ marginBottom: 16 }}>
        <StudentActions />
      </Grid>
      <Grid item xs={12}>
        <StudentsTable />
      </Grid>
    </Grid>
  );
}

export default StudentTableSectionContainer;