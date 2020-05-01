import React from 'react';
import { Grid } from "@material-ui/core";
import StudentsTable from "./StudentTable/StudentTable";
import StudentFiltersAction from "./StudentTable/StudentFiltersAction";

const StudentTableSectionContainer = props => {
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
       <StudentFiltersAction />
      </Grid>
      <Grid item xs={12}>
        <StudentsTable />
      </Grid>
    </Grid>
  );
}

export default StudentTableSectionContainer;