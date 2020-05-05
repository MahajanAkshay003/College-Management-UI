import React, {Fragment, useEffect, useState} from 'react';
import {Grid, Typography, Paper, Stepper, StepLabel, Step, Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import DashboardDrawer from "../../../components/DashboardDrawer/DashboardDrawer";
import StudentBasicDetailsPanel from "./StudentBasicDetailsPanel";
import StudentParentDetailsPanel from "./StudentParentDetailsPanel";
import StudentAdditionalDetails from './AddStudentAdditionalDetails';
import SearchStudentSection from "./SearchStudentSection";
import useGetDepartments from "../../../remoteHooks/getDepartments";
import NotificationCustomHook from "../../../CustomHooks/NotificationCustomHook";
import {addCollegeUser} from "../../../remoteMethods/CollegeUser/CollegeUser";
import Notification from "../../../components/Notification/Notification";
import { getStudentByRollNumber } from "../../../remoteMethods/Student/student";
import useGetBatchesByDepartment from "../../../remoteHooks/getBatchesByDepartment";

const AddStudentSection = props => {
  const [
    isNotificationOpen, setNotificationOpen, notificationMessage, notificationType, setNotificationTypeAndMessage
  ] = NotificationCustomHook();
  const [departments, loading, error] = useGetDepartments();
  const [activeStep, setActiveStep] = useState(0);
  const [rollNumber, setRollNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [yearOfAdmission, setYearOfAdmission] = useState("");
  const [motherFirstName, setMotherFirstName] = useState("");
  const [motherMiddleName, setMotherMiddleName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [motherPhoneNumber, setMotherPhoneNumber] = useState("");
  const [fatherFirstName, setFatherFirstName] = useState("");
  const [fatherMiddleName, setFatherMiddleName] = useState("");
  const [fatherLastName, setFatherLastName] = useState("");
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [isOutsideDelhi, setOutsideDelhi] = useState(false);
  const [quota, setQuota] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [batchId, setBatchId] = useState("");
  const [ ipuRank, setIpuRank ] = useState("");
  const [ semester, setSemester ] = useState(1);
  const [ foundStudent, setFoundStudent ] = useState();
  const batches = useGetBatchesByDepartment(departmentId);
  const steps = ['Basic Details', "Mother's Details", "Father's Details", 'Additional Details'];
  const renderSectionHeaderByAction = () => {
    if (props.match.params.action === "add") {
      return <Typography variant={"h4"} style={{fontWeight: 300}}>
        Add New Student
      </Typography>
    } else if (props.match.params.action === "edit") {
      return <Typography variant={"h4"} style={{fontWeight: 300}}>
        Edit Current Student
      </Typography>
    }
  }
  const saveStudentDetails = () => {
    const userData = {
      userCredentials: {
        email: emailAddress, password: firstName, userType: "student"
      },
      userInfo: {
        firstName, middleName, lastName,
        departmentId, batchId, rollNumber, gender,
        yearOfAdmission, motherPhoneNumber, fatherPhoneNumber,
        motherFirstName, motherMiddleName, motherLastName,
        fatherFirstName, fatherMiddleName, fatherLastName,
        currentAddress, permanentAddress,
        outsideDelhi: isOutsideDelhi,
        quota, ipuRank, semester
      }
    }
    addCollegeUser(userData)
      .then(() => {
        setNotificationTypeAndMessage("success", "New Student Added Successfully!");
      }).catch(() => {
        setNotificationTypeAndMessage("error", "Something went wrong!");
      })
  }
  const getStudentDetails = () => {
    getStudentByRollNumber(rollNumber)
      .then(data => {
        setFoundStudent(data.student);
        // setNotificationTypeAndMessage("success", "Student found Successfully!");
      }).catch(() => {
        setNotificationTypeAndMessage("error", "Something went wrong!");
      })
  }
  const editStudentDetails = () => {
    const {
      firstName, middleName, lastName,
      departmentId, batchId, rollNumber, gender,
      yearOfAdmission, motherPhoneNumber, fatherPhoneNumber,
      motherFirstName, motherMiddleName, motherLastName,
      fatherFirstName, fatherMiddleName, fatherLastName,
      currentAddress, permanentAddress, outsideDelhi,
      quota, ipuRank, semester, email
    } = foundStudent;
    setEmailAddress(email);
    setFirstName(firstName);
    setMiddleName(middleName);
    setLastName(lastName);
    setDepartmentId(departmentId);
    setRollNumber(rollNumber);
    setGender(gender);
    setYearOfAdmission(yearOfAdmission);
    setMotherPhoneNumber(motherPhoneNumber);
    setMotherFirstName(motherFirstName);
    setMotherMiddleName(motherMiddleName);
    setMotherLastName(motherLastName);
    setFatherPhoneNumber(fatherPhoneNumber);
    setFatherFirstName(fatherFirstName);
    setFatherMiddleName(fatherMiddleName);
    setFatherLastName(fatherLastName);
    setCurrentAddress(currentAddress);
    setPermanentAddress(permanentAddress);
    setOutsideDelhi(outsideDelhi);
    setQuota(quota);
    setBatchId(batchId);
    setIpuRank(ipuRank);
    setSemester(semester);
    setActiveStep(0);
  }
  const studentCategories = [
    { value: "general", label: "General" },
    { value: "sc", label: "SC" },
    { value: "st", label: "ST" },
    { value: "defence", label: "Defence" },
    { value: "pwd", label: "PWD" }
   ];
  const semesters = Array(8).fill().map((val, index) => ({ value: index + 1, label: `Semester ${index + 1}` }));
  useEffect(() => {
    if (props.match.params.action === "edit") setActiveStep(-1);
  }, [props.match.params.action]);
  const changePanelByActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <StudentBasicDetailsPanel
          activeStep={activeStep}
          emailAddress={emailAddress} setEmailAddress={setEmailAddress}
          rollNumber={rollNumber} setRollNumber={setRollNumber}
          firstName={firstName} setFirstName={setFirstName}
          middleName={middleName} setMiddleName={setMiddleName}
          lastName={lastName} setLastName={setLastName}
          gender={gender} setGender={setGender}
          yearOfAdmission={yearOfAdmission} setYearOfAdmission={setYearOfAdmission}
        />;
      case 1:
        return <StudentParentDetailsPanel
          activeStep={activeStep}
          motherFirstName={motherFirstName} setMotherFirstName={setMotherFirstName}
          motherMiddleName={motherMiddleName} setMotherMiddleName={setMotherMiddleName}
          motherLastName={motherLastName} setMotherLastName={setMotherLastName}
          motherPhoneNumber={motherPhoneNumber} setMotherPhoneNumber={setMotherPhoneNumber}
        />;
      case 2:
        return <StudentParentDetailsPanel
          activeStep={activeStep}
          fatherFirstName={fatherFirstName} setFatherFirstName={setFatherFirstName}
          fatherMiddleName={fatherMiddleName} setFatherMiddleName={setFatherMiddleName}
          fatherLastName={fatherLastName} setFatherLastName={setFatherLastName}
          fatherPhoneNumber={fatherPhoneNumber} setFatherPhoneNumber={setFatherPhoneNumber}
        />;
      case 3:
        return <StudentAdditionalDetails
          studentCategories={studentCategories} semesters={semesters}
          currentAddress={currentAddress} setCurrentAddress={setCurrentAddress}
          permanentAddress={permanentAddress} setPermanentAddress={setPermanentAddress}
          isOutsideDelhi={isOutsideDelhi} setOutsideDelhi={setOutsideDelhi}
          quota={quota} setQuota={setQuota} departments={departments}
          departmentId={departmentId} setDepartmentId={setDepartmentId}
          batchId={batchId} setBatchId={setBatchId}
          ipuRank={ipuRank} setIpuRank={setIpuRank}
          semester={semester} setSemester={setSemester} batches={batches}
        />
    }
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify={"center"} style={{paddingTop: "8px"}}>
          <Grid item xs={3}/>
          <Grid item xs={6}>
            {renderSectionHeaderByAction()}
          </Grid>
        </Grid>
        {
          activeStep !== -1
          &&
          <Fragment>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
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
                  color={activeStep === 2 ? "primary" : "secondary"}
                  style={{marginTop: "16px", marginBottom: "16px"}}
                  onClick={() => {
                    if (activeStep < 3) setActiveStep(activeStep + 1);
                    else saveStudentDetails();
                  }}
                  fullWidth
                >
                  {activeStep === 3 ? "Save" : "Next"}
                </Button>
              </Grid>
            </Grid>
          </Fragment>
        }
        {
          activeStep === -1
          &&
          <Fragment>
            <SearchStudentSection editStudentDetails={editStudentDetails} student={foundStudent} getStudentDetails={getStudentDetails} rollNumber={rollNumber} setRollNumber={setRollNumber} />
          </Fragment>
        }
      </Grid>
      <Notification
        isNotificationOpen={isNotificationOpen}
        setNotificationOpen={setNotificationOpen}
        notificationMessage={notificationMessage}
        notificationType={notificationType}
      />
    </Grid>
  )
};

export default withRouter(AddStudentSection);