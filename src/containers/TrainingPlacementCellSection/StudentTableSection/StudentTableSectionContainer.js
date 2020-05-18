import React, {useState, Fragment} from 'react';
import { Grid } from "@material-ui/core";
import StudentFilters from "./StudentFilters";
import StudentActions from "./StudentActions";
import StudentsTable from "./StudentsTable";

const StudentTableSectionContainer = props => {
  const [ fullName, setFullName ] = useState("");
  const [ departmentId, setDepartmentId ] = useState();
  const [ semester, setSemester ] = useState();
  const searchStudentsByFilters = () => {

  }
  return (
    <Fragment>
      <Grid container style={{ paddingLeft: 8 }}>
        <Grid item xs={12} style={{ marginBottom: 8 }}>
          <StudentFilters fullName={fullName} setFullName={setFullName} setDepartmentId={setDepartmentId} setSemester={setSemester} />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 16 }}>
          <StudentActions searchStudent={searchStudentsByFilters} />
        </Grid>
        <Grid item xs={12}>
          <StudentsTable />
        </Grid>
      </Grid>

    </Fragment>
  );
}

export default StudentTableSectionContainer;