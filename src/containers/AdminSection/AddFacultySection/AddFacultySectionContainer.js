import React, { useState } from 'react';
import {Button, Grid, Step, StepLabel, Stepper, Typography} from "@material-ui/core";
import AddFacultyBasicDetailsPanel from "./AddFacultyBasicDetailsPanel";
import AddFacultyExtraDetailsPanel from "./AddFacultyExtraDetailsPanel";

const AddFacultySectionContainer = props => {
  const [ activeStep, setActiveStep ] = useState(0);
  const [ firstName, setFirstName ] = useState("");
  const [ middleName, setMiddleName ] = useState("");
  const [ lastName, setLastName] = useState("");
  const [ departmentName, setDepartmentName ] = useState("");
  const [ highestEducation, setHighestEducation ] = useState("");
  const [ prefix, setPrefix ] = useState("");
  const [ workingDays, setWorkingDays ] = useState("");
  const [ isExamCellEmployee, setExamCellEmployee ] = useState(false);
  const steps = ['Basic Details', 'Additional Details'];
  const changePanelByActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <AddFacultyBasicDetailsPanel
          firstName={firstName} setFirstName={setFirstName}
          middleName={middleName} setMiddleName={setMiddleName}
          lastName={lastName} setLastName={setLastName}
          departmentName={departmentName} setDepartmentName={setDepartmentName}
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
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify={"center"} style={{ paddingTop: "8px" }}>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <Typography variant={"h4"} style={{ fontWeight: 300 }}>
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
    </Grid>
  );
}

export default AddFacultySectionContainer;