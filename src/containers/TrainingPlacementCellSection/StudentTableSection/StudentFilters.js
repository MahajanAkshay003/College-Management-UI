import React, {useState} from 'react';
import { Grid, TextField } from "@material-ui/core";
import Select from 'react-select';
import useGetDepartments from "../../../remoteHooks/getDepartments";

const StudentFilters = props => {
  const { fullName, setFullName, setDepartmentId, setSemester } = props;
  const [ departments, loading, error ] = useGetDepartments();
  const semesters = Array(8).fill().map((val, index) => ({ value: index + 1, label: `Semester ${index + 1}` }));
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <TextField
          label="Student Name"
          variant="outlined"
          value={fullName}
          autoFocus
          onChange={event => setFullName(event.target.value)}
          margin={"dense"}
          fullWidth
        />
      </Grid>
      <Grid item xs={4} style={{ paddingTop: 12 }}>
        <Select options={departments} placeHolder={"Select Department"} onChange={selectedVal => setDepartmentId(selectedVal.value)} />
      </Grid>
      <Grid item xs={4} style={{ paddingTop: 12 }}>
        <Select options={semesters} placeHolder={"Select Semester"} onChange={selectedVal => setSemester(selectedVal.value)} />
      </Grid>
    </Grid>
  );
}

export default StudentFilters;