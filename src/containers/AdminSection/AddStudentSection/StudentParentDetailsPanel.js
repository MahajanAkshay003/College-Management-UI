import React, { Fragment, useState, useEffect } from 'react';
import { Grid, TextField } from "@material-ui/core";

const StudentParentDetailsPanel = props => {
  const {
    activeStep, motherFirstName, setMotherFirstName,
    motherMiddleName, setMotherMiddleName, motherLastName,
    setMotherLastName, motherPhoneNumber, setMotherPhoneNumber,
    fatherFirstName, setFatherFirstName, fatherMiddleName,
    setFatherMiddleName, fatherLastName, setFatherLastName,
    fatherPhoneNumber, setFatherPhoneNumber
  } = props;
  const [ isMother, setIsMother ] = useState(true);
  useEffect(() => {
    if (activeStep === 1) setIsMother(true);
    else if (activeStep === 2) setIsMother(false);
  }, [activeStep]);
  const onChangeHandler = (type, event) => {
    const value = event.target.value;
    switch (type) {
      case "firstName": 
        isMother ? setMotherFirstName(value) : setFatherFirstName(value);
        break;
      case "middleName": 
        isMother ? setMotherMiddleName(value) : setFatherMiddleName(value);
        break;
      case "lastName": 
        isMother ? setMotherLastName(value) : setFatherLastName(value);
        break;
      case "phoneNumber": 
        isMother ? setMotherPhoneNumber(value) : setFatherPhoneNumber(value);
        break;
      default:
    }
  }
  return (
    <Fragment>
      <Grid container justify={"center"}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                variant="outlined"
                value={isMother ? motherFirstName : fatherFirstName}
                onChange={event => onChangeHandler("firstName", event)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Middle Name"
                variant="outlined"
                value={isMother ? motherMiddleName : fatherMiddleName}
                onChange={event => onChangeHandler("middleName", event)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Last Name"
                variant="outlined"
                value={isMother ? motherLastName : fatherLastName}
                onChange={event => onChangeHandler("lastName", event)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Phone Number"
                variant="outlined"
                value={isMother ? motherPhoneNumber : fatherPhoneNumber}
                onChange={event => onChangeHandler("phoneNumber", event)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default StudentParentDetailsPanel;