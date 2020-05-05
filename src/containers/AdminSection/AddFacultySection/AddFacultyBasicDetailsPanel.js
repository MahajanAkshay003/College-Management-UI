import React from 'react';
import {FormControlLabel, Grid, Radio, RadioGroup, TextField} from "@material-ui/core";
import Select from "react-select";
import dropdownStyles from "../../../styles/dropdownStyles";

const AddFacultyBasicDetailsPanel = props => {
  const {
    firstName, setFirstName,
    middleName, setMiddleName,
    lastName, setLastName,
    email, setEmail,
    setDepartmentId, departments
  } = props;
  return (
    <Grid container justify={"center"}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                autoFocus
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
                style={{ marginTop: "12px" }}
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={event => setEmail(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 12 }}>
              <Select
                styles={dropdownStyles}
                options={departments}
                placeholder={"Choose Department"}
                onChange={selectedVal => setDepartmentId(selectedVal.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default AddFacultyBasicDetailsPanel;