import React, {useState} from 'react';
import {Button, Grid, Step, StepLabel, Stepper, Typography} from "@material-ui/core";
import AddFacultyBasicDetailsPanel from "./AddFacultyBasicDetailsPanel";
import AddFacultyExtraDetailsPanel from "./AddFacultyExtraDetailsPanel";
import useGetDepartments from "../../../remoteHooks/getDepartments";
import { addCollegeUser } from "../../../remoteMethods/CollegeUser/CollegeUser";
import NotificationCustomHook from "../../../CustomHooks/NotificationCustomHook";
import Notification from "../../../components/Notification/Notification";

const AddFacultySectionContainer = props => {
  const [
    isNotificationOpen, setNotificationOpen, notificationMessage, notificationType, setNotificationTypeAndMessage
  ] = NotificationCustomHook();
  const [departments, loading, error] = useGetDepartments();
  const [activeStep, setActiveStep] = useState(0);
  const [ email, setEmail ] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [highestEducation, setHighestEducation] = useState("");
  const [prefix, setPrefix] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [isExamCellEmployee, setExamCellEmployee] = useState(false);
  const steps = ['Basic Details', 'Additional Details'];
  const changePanelByActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <AddFacultyBasicDetailsPanel
          firstName={firstName} setFirstName={setFirstName}
          middleName={middleName} setMiddleName={setMiddleName}
          lastName={lastName} setLastName={setLastName}
          email={email} setEmail={setEmail} departments={departments}
          departmentId={departmentId} setDepartmentId={setDepartmentId}
        />
      case 1:
        return <AddFacultyExtraDetailsPanel
          highestEducation={highestEducation} setHighestEducation={setHighestEducation}
          prefix={prefix} setPrefix={setPrefix}
          workingDays={workingDays} setWorkingDays={setWorkingDays}
          isExamCellEmployee={isExamCellEmployee} setExamCellEmployee={setExamCellEmployee}
        />
      default:
    }
  }
  const saveFaculty = () => {
    const userData = {
      userCredentials: {
        email, password: firstName, userType: "faculty"
      },
      userInfo: {
        firstName, middleName, lastName,
        departmentId, workingDays, isExamCellEmployee,
        highestEducation, prefix
      }
    }
    addCollegeUser(userData)
      .then(() => {
        setNotificationTypeAndMessage("success", "New Faculty Added Successfully!");
      }).catch(() => {
        setNotificationTypeAndMessage("error", "Something went wrong!");
      })
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify={"center"} style={{paddingTop: "8px"}}>
          <Grid item xs={6} style={{textAlign: "center"}}>
            <Typography variant={"h4"} style={{fontWeight: 300}}>
              Add New Faculty
            </Typography>
          </Grid>
        </Grid>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container justify={"center"}>
          <Grid item xs={10}>
            {changePanelByActiveStep()}
            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={1}>
                {activeStep > 0 && <Button
                  variant={"contained"}
                  color={"primary"}
                  style={{marginTop: "16px", marginBottom: "16px"}}
                  onClick={() => setActiveStep(activeStep - 1)}
                  fullWidth
                >
                  Back
                </Button>}
              </Grid>
              <Grid item xs={6}/>
              <Grid item xs={1}>
                <Button
                  variant={"contained"}
                  color={activeStep === 1 ? "primary" : "secondary"}
                  style={{marginTop: "16px", marginBottom: "16px"}}
                  onClick={() => {
                    if (activeStep < 1) setActiveStep(activeStep + 1);
                    else saveFaculty();
                  }}
                  fullWidth
                >
                  {activeStep === 1 ? "Save" : "Next"}
                </Button>
              </Grid>
            </Grid>
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

export default AddFacultySectionContainer;