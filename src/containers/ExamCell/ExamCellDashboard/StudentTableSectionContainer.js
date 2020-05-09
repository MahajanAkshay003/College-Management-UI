import React from 'react';
import { Grid } from "@material-ui/core";
import StudentsTable from "./StudentTable/StudentTable";
import StudentFiltersAction from "./StudentTable/StudentFiltersAction";

const StudentTableSectionContainer = props => {
  const { startSearch, fullName, setFullName, students } = props;
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
       <StudentFiltersAction startSearch={startSearch} fullName={fullName} setFullName={setFullName} />
      </Grid>
      <Grid item xs={12}>
        <StudentsTable students={students} />
      </Grid>
    </Grid>
  );
}

export default StudentTableSectionContainer;