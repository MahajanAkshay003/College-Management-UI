import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import CreateStudentCard from "./StudentSection/CreateStudentCard";
import AddStudentMarks from "./StudentSection/AddStudentMarks";
import CreateFacultyCard from "./FacultySection/CreateFacultyCard";
import CreateEmployee from "./EmployeeSection/CreateEmployee";
import FacultyAttendanceCard from "./FacultyAttendanceSection/FacultyAttendanceCard";
import CreateAdminCard from "./AddAdminSection/CreateAdminCard";
import CreateExamCellCard from "./AddExamCellSection/CreateExamCellCard";
import CreateTnpCrad from "./AddTnpSection/CreateTnpCard";

const AddUserSection = props => {
  return (
    <Paper style={{ padding: "16px" }} elevation={4}>
      <Grid container>
        <Grid item xs={12} style={{ marginBottom: "8px" }}>
          <Typography variant={"h5"} style={{ fontWeight: 300 }}>
            User Section
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CreateStudentCard />
          </Grid>
          <Grid item xs={4}>
            <CreateFacultyCard />
          </Grid>
          <Grid item xs={4}>
            <FacultyAttendanceCard />
          </Grid>
          <Grid item xs={4}>
            <CreateAdminCard />
          </Grid>
          <Grid item xs={4}>
            <CreateExamCellCard />
          </Grid>
          <Grid item xs={4}>
            <CreateTnpCrad />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default AddUserSection;