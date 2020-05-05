import React, {useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";
import dropdownStyles from "../../../../styles/dropdownStyles";
import Select from "react-select";

const ListSubjectFilters = props => {
  const { departments, semesters, setDepartmentId, setSemester, searchSubjects } = props;
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Select
          styles={dropdownStyles}
          options={departments}
          placeholder={"Choose Department"}
          onChange={selectedVal => setDepartmentId(selectedVal.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Select
          styles={dropdownStyles}
          options={semesters}
          placeholder={"Choose Semester"}
          onChange={selectedVal => setSemester(selectedVal.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant={"contained"} color={"secondary"} fullWidth onClick={searchSubjects}>
          Search Subjects
        </Button>
      </Grid>
    </Grid>
  );
}

export default ListSubjectFilters;