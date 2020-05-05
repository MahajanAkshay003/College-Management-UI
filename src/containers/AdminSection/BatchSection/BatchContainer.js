import React, {useEffect, useState} from 'react';
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import useGetDepartments from "../../../remoteHooks/getDepartments";
import { addBatch } from "../../../remoteMethods/Batch/batch";
import Select from "react-select";
import dropdownStyles from "../../../styles/dropdownStyles";
import NotificationCustomHook from "../../../CustomHooks/NotificationCustomHook";
import Notification from "../../../components/Notification/Notification";

const BatchContainer = props => {
  const [
    isNotificationOpen, setNotificationOpen, notificationMessage, notificationType, setNotificationTypeAndMessage
  ] = NotificationCustomHook();
  const [ departments, loading, error ] = useGetDepartments();
  const [ allDepartments, setAllDepartments ] = useState([]);
  const [ departmentId, setDepartmentId ] = useState("");
  const [ batchName, setBatchName ] = useState("");
  useEffect(() => setAllDepartments(departments), [departments]);
  const saveBatchButtonHandler = async () => {
    try {
      await addBatch(departmentId, batchName);
      resetForm();
      setNotificationTypeAndMessage("success", "New Batch Added Successfully!");
    } catch (error) {
      resetForm();
      setNotificationTypeAndMessage("error", "Something went wrong!");
    }
  }
  const resetForm = () => { setBatchName(""); };
  return (
    <Grid container justify={"center"} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify={"center"} style={{ paddingTop: "8px" }}>
          <Grid item xs={6} style={{ textAlign: "center"}}>
            <Typography variant={"h4"} style={{ fontWeight: 300 }}>
              Add New Batch
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify={"center"} style={{ marginTop: 16 }}>
          <Grid item xs={6}>
            <Select
              styles={dropdownStyles}
              options={allDepartments}
              placeholder={"Choose Department"}
              onChange={selectedVal => setDepartmentId(selectedVal.value)}
            />
            <TextField
              style={{ marginTop: "12px" }}
              label="Batch Name"
              variant="outlined"
              value={batchName}
              onChange={event => setBatchName(event.target.value)}
              fullWidth
            />
            <Grid container justify={"flex-end"}>
              <Grid item xs={3}>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                  onClick={saveBatchButtonHandler}
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

export default BatchContainer;