import React, { Fragment, useState } from 'react';
import {TextField, Grid, FormControlLabel, RadioGroup, Radio, Typography} from "@material-ui/core";
import Select from 'react-select'

const StudentMarks = props => {
  const options = [
    { value: 0, label: 'Semester 1' },
    { value: 1, label: 'Semester 2' },
    { value: 2, label: 'Semester 3' },
    { value: 3, label: 'Semester 4' },
    { value: 4, label: 'Semester 5' },
    { value: 5, label: 'Semester 6' },
    { value: 6, label: "Semester 7" },
    { value: 7, label: 'Semester 8' },
  ];
  const students = [
    { value: 0, label: 'Test 1' },
    { value: 1, label: 'Test 2' }
  ];
  const branches = ["ECE", "CS"];
  const subjects = {

  }
  const [ selectedSemester, setSelectedSemester ] = useState(0);
  const renderSectionHeaderByAction = () => {
    if (props.match.params.action === "add") {
      return <Typography variant={"h4"} style={{ fontWeight: 300 }}>
        Add Student
      </Typography>
    } else if (props.match.params.action === "edit") {
      return <Typography variant={"h4"} style={{ fontWeight: 300 }}>
        Edit Student
      </Typography>
    }
  }
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ fontWeight: 300, marginBottom: 16, marginTop: 16, textAlign: "center" }}>
                Add/Edit Student Marks
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "16px" }}>
              <Select options={students}  onChange={selectedVal => {
                setSelectedSemester(selectedVal.value)
              }} />
            </Grid>
            <Grid item xs={12}>
              <Select options={options} defaultValue={options[selectedSemester]} onChange={selectedVal => {
                setSelectedSemester(selectedVal.value)
              }} />
            </Grid>
            {/* <Grid item xs={8} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default StudentMarks;