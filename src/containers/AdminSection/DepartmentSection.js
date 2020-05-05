import React from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import DepartmentCard from "./DepartmentSection/DepartmentCard";
import BatchCard from "./BatchSection/BatchCard";
import TimeTableCard from "./DepartmentSection/TimeTableCard";
import SubjectCard from "./AddSubjectSection/SubjectCard";

const DepartmentSection = props => {
  return (
    <Paper style={{ padding: "16px" }} elevation={4}>
      <Grid container>
        <Grid item xs={12} style={{ marginBottom: "8px" }}>
          <Typography variant={"h5"} style={{ fontWeight: 300 }}>
            Department Section
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DepartmentCard />
          </Grid>
          <Grid item xs={4}>
            <BatchCard />
          </Grid>
          <Grid item xs={4}>
            <SubjectCard />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DepartmentSection;