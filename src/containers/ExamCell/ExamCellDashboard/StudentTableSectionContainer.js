import React, {useState} from 'react';
import { Grid } from "@material-ui/core";
import StudentsTable from "./StudentTable/StudentTable";
import StudentFiltersAction from "./StudentTable/StudentFiltersAction";

const StudentTableSectionContainer = props => {
  const { startSearch, fullName, setFullName, students } = props;
  const [ selectedStudents, setSelectedStudents ] = useState([]);
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
       <StudentFiltersAction startSearch={startSearch} selectedStudents={selectedStudents} fullName={fullName} setFullName={setFullName} />
      </Grid>
      <Grid item xs={12}>
        <StudentsTable students={students} selectedStudents={selectedStudents} setSelectedStudents={setSelectedStudents} />
      </Grid>
    </Grid>
  );
}

export default StudentTableSectionContainer;