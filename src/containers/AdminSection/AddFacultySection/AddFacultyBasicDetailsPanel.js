import React from 'react';
import {FormControlLabel, Grid, Radio, RadioGroup, TextField} from "@material-ui/core";

const AddFacultyBasicDetailsPanel = props => {
  const {
    firstName, setFirstName,
    middleName, setMiddleName,
    lastName, setLastName,
    departmentName, setDepartmentName
  } = props;
  return (
    <Grid container justify={"center"}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                style={{ marginTop: "12px" }}
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Middle Name"
                variant="outlined"
                value={middleName}
                onChange={event => setMiddleName(event.target.value)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                fullWidth
              />
              <TextField
                label="Department Name"
                style={{ marginTop: "12px" }}
                variant="outlined"
                value={departmentName}
                onChange={event => setDepartmentName(event.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default AddFacultyBasicDetailsPanel;