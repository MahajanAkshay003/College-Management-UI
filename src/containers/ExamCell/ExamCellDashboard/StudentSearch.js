import React, {useState} from 'react';
import {Button, Card, CardContent, CardMedia, Grid, IconButton, Paper, TextField, Typography} from "@material-ui/core";
import StudentIcon from "../../../assets/student.png";
import SearchIcon from "@material-ui/icons/Search";
import Select from "react-select";
import useGetDepartments from "../../../remoteHooks/getDepartments";
import useGetBatchesByDepartment from "../../../remoteHooks/getBatchesByDepartment";

const StudentSearch = props => {
  const [ departments, loading, error ] = useGetDepartments();
  const batches = useGetBatchesByDepartment(props.selectedDepartment);
  const yearsList = [{ value: 1, label: "First Year" }, { value: 2, label: "Second Year" }, { value: 3, label: "Third Year" }, { value: 4, label: "Fourth Year" }];
  const {
    setStartSearch, selectedDepartment, selectedBatch,
    selectedSemester, setSelectedDepartment, setSelectedBatch,
    setSelectedSemester, filterStudentsClickHandler
  } = props;
  return (
    <Grid container style={{ marginTop: 16 }} justify={"center"}>
      <Grid item xs={4}/>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <Paper style={{ borderRadius: "50%", ...styles.cardMedia, height: 175, width: 175, zIndex: 10, position: "relative" }} elevation={4}>
              <CardMedia style={{...styles.cardMedia, position: "relative", top: 32}} image={StudentIcon}/>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={6}>
        <Card style={{position: "relative", top: "-32px", zIndex: 0 }} elevation={4}>
            <CardContent style={{textAlign: "center", paddingTop: "42px", paddingBottom: 100 }}>
              <Grid container justify={"center"} style={{ marginTop: 16 }}>
                <Grid item xs={8}>
                  <div>
                    <Select options={departments} placeholder={"Select Department"} onChange={selectedVal => {
                      setSelectedDepartment(selectedVal.value)
                    }} />
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Select options={batches} placeholder={"Select Batch"} onChange={selectedVal => {
                      setSelectedBatch(selectedVal.value)
                    }} />
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Select options={yearsList} placeholder={"Select Year"} onChange={selectedVal => {
                      setSelectedSemester(selectedVal.value * 2)
                    }} />
                  </div>
                </Grid>
                <Grid item xs={8} style={{ marginTop: 16 }}>
                  <Button variant={"contained"} color={"primary"} fullWidth onClick={filterStudentsClickHandler}>
                    <IconButton><SearchIcon style={{ color: "white" }} /></IconButton>
                    <Typography variant={"body1"}>Filter Students</Typography>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

const styles = {
  cardMedia: {
    height: "120px",
    width: "120px",
    marginLeft: "auto",
    marginRight: "auto"
  }
}

export default StudentSearch;