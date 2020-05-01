import React, { Fragment, useState } from 'react';
import {TextField, Grid, FormControlLabel, RadioGroup, Radio, Typography} from "@material-ui/core";

const StudentBasicDetailsPanel = props => {
  const {
    rollNumber, setRollNumber,
    firstName, setFirstName,
    middleName, setMiddleName,
    lastName, setLastName,
    yearOfAdmission, setYearOfAdmission,
    emailAddress, setEmailAddress,
    gender, setGender
  } = props;
  return (
    <Fragment>
      <Grid container justify={"center"}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Roll Number"
                variant="outlined"
                autoFocus={true}
                value={rollNumber}
                onChange={event => setRollNumber(event.target.value)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Email Address"
                variant="outlined"
                value={emailAddress}
                onChange={event => setEmailAddress(event.target.value)}
                fullWidth
              />
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
              <RadioGroup defaultValue={gender} row style={{ paddingTop: "8px" }} onChange={event => setGender(event.target.value)}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
              <TextField
                label="Year of Admission"
                style={{ marginTop: "12px" }}
                variant="outlined"
                value={yearOfAdmission}
                onChange={event => setYearOfAdmission(event.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default StudentBasicDetailsPanel;