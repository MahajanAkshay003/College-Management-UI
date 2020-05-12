import React, { useState } from 'react';
import {FormControlLabel, Grid, Radio, RadioGroup, Button, TextField, Typography} from "@material-ui/core";
import { green } from "@material-ui/core/colors"
import Select from "react-select";
import dropdownStyles from "../../../styles/dropdownStyles";
import NotificationCustomHook from "../../../CustomHooks/NotificationCustomHook";
import {addCollegeUser} from "../../../remoteMethods/CollegeUser/CollegeUser";
import Notification from "../../../components/Notification/Notification";

const AddExamCellSection = props => {
  const [
    isNotificationOpen, setNotificationOpen, notificationMessage, notificationType, setNotificationTypeAndMessage
  ] = NotificationCustomHook();
  const [ firstName, setFirstName ] = useState("");
  const [ middleName, setMiddleName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const saveExamCellEmployee = () => {
    const userData = {
      userCredentials: {
        email, password: firstName, userType: "examcell"
      },
      userInfo: {
        firstName, middleName, lastName
      }
    }
    addCollegeUser(userData)
      .then(() => {
        setNotificationTypeAndMessage("success", "New Exam Cell Employee Added Successfully!");
      }).catch(() => {
        setNotificationTypeAndMessage("error", "Something went wrong!");
      })
  }
  return (
    <Grid container justify={"center"}>
      <Grid item xs={12}>
        <Grid container justify={"center"} style={{paddingTop: "8px", marginBottom: 16 }}>
          <Grid item xs={6} style={{textAlign: "center"}}>
            <Typography variant={"h4"} style={{fontWeight: 300}}>
              Add Exam Cell Employee
            </Typography>
          </Grid>
        </Grid>
      </Grid>
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
          </Grid>
        </Grid>
        <Grid item xs={8} style={{ marginTop: 30 }}>
          <Grid container justify={"flex-end"}>
            <Grid item xs={4}>
              <Button variant={"contained"} onClick={saveExamCellEmployee} size={"large"} style={{ color: "white", backgroundColor: green[500] }} fullWidth>Create Exam Cell Employee</Button>
            </Grid>
          </Grid>
        </Grid>
      <Notification
        isNotificationOpen={isNotificationOpen}
        setNotificationOpen={setNotificationOpen}
        notificationMessage={notificationMessage}
        notificationType={notificationType}
      />
    </Grid>
  );
}

export default AddExamCellSection;