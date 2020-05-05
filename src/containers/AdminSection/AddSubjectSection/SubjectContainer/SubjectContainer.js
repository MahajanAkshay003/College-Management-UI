import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { addDepartment } from "../../../../remoteMethods/Department/Department";
import NotificationCustomHook from "../../../../CustomHooks/NotificationCustomHook";
import Notification from "../../../../components/Notification/Notification";
import useGetDepartments from "../../../../remoteHooks/getDepartments";
import useGetBatchesByDepartment from "../../../../remoteHooks/getBatchesByDepartment";
import Select from "react-select";
import dropdownStyles from "../../../../styles/dropdownStyles";
import {addSubject} from "../../../../remoteMethods/Subject/Subject";

const SubjectContainer = props => {
  const [
    isNotificationOpen, setNotificationOpen, notificationMessage, notificationType, setNotificationTypeAndMessage
  ] = NotificationCustomHook();
  const [ subjectCode, setSubjectCode ] = useState("");
  const [ subjectName, setSubjectName ] = useState("");
  const [ semester, setSemester ] = useState("");
  const [ departmentId, setDepartmentId ] = useState("");
  const [ subjectDescription, setSubjectDescription ] = useState("");
  const [ credits, setCredits ] = useState("");
  const [ subjectType, setSubjectType ] = useState("");
  const [departments, loading, error] = useGetDepartments();
  const subjectTypes = [{ value: "theory", label: "Theory" }, { value: "practical", label: "Practical" }];
  const semesters = Array(8).fill().map((val, index) => ({ value: `${index + 1}`, label: `Semester ${index + 1}` }));
  const addSubjectButtonHandler = async () => {
    try {
      await addSubject(subjectCode, subjectName, subjectDescription, credits, departmentId, semester, subjectType);
      resetForm();
      setNotificationTypeAndMessage("success", "New Subject Added Successfully!");
    } catch (error) {
      setNotificationTypeAndMessage("error", "Something went wrong!");
    }
  }
  const resetForm = () => {
    setSubjectCode("");
    setSubjectName("");
    setSemester("");
    setDepartmentId("");
    setSubjectDescription("");
    setCredits("");
    setSubjectType("");
  }
  return (
    <Grid container justify={"center"} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify={"center"} style={{ paddingTop: "8px" }}>
          <Grid item xs={6} style={{ textAlign: "center"}}>
            <Typography variant={"h4"} style={{ fontWeight: 300 }}>
              Add New Subject
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify={"center"} style={{ marginTop: 16 }}>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="Subject Code"
                  variant="outlined"
                  autoFocus={true}
                  value={subjectCode}
                  onChange={event => setSubjectCode(event.target.value)}
                  fullWidth
                />
                <TextField
                  style={{ marginTop: "12px" }}
                  label="Subject Name"
                  variant="outlined"
                  value={subjectName}
                  onChange={event => setSubjectName(event.target.value)}
                  fullWidth
                />
                <TextField
                  style={{ marginTop: "12px" }}
                  label="Subject Description"
                  variant="outlined"
                  value={subjectDescription}
                  onChange={event => setSubjectDescription(event.target.value)}
                  fullWidth
                />
                <TextField
                  style={{ marginTop: "12px" }}
                  label="Subject Credits"
                  variant="outlined"
                  value={credits}
                  onChange={event => setCredits(event.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} style={{ marginTop: 16, marginBottom: 16 }}>
                <Select
                  styles={dropdownStyles}
                  options={departments}
                  placeholder={"Choose Department"}
                  onChange={selectedVal => setDepartmentId(selectedVal.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: 16 }}>
                <Select
                  styles={dropdownStyles}
                  options={semesters}
                  placeholder={"Choose Semester"}
                  onChange={selectedVal => setSemester(selectedVal.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ marginBottom: 16 }}>
                <Select
                  styles={dropdownStyles}
                  options={subjectTypes}
                  placeholder={"Choose Subject Type"}
                  onChange={selectedVal => setSubjectType(selectedVal.value)}
                />
              </Grid>
            </Grid>
            <Grid container justify={"flex-end"}>
              <Grid item xs={3}>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                  onClick={addSubjectButtonHandler}
                  fullWidth
                >
                  Save
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

export default SubjectContainer;