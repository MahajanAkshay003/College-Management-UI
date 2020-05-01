import React, {useState} from 'react';
import {Button, Card, CardContent, CardMedia, Grid, IconButton, Paper, TextField, Typography} from "@material-ui/core";
import StudentIcon from "../../../assets/student.png";
import SearchIcon from "@material-ui/icons/Search";
import Select from "react-select";

const StudentSearch = props => {
  const departmentsList = [{ value: "cse", label: "CSE" }, { value: "ece", label: "ECE" }, { value: "it", label: "IT" }];
  const batchesList = [{ value: 1, label: "ECE-1" }, { value: 2, label: "ECE-2" }];
  const yearsList = [{ value: 1, label: "First Year" }, { value: 2, label: "Second Year" }, { value: 3, label: "Third Year" }, { value: 4, label: "Fourth Year" }];
  const [ selectedDepartment, setSelectedDepartment ] = useState("Select Department");
  const [ selectedBatch, setSelectedBatch ] = useState("Select Batch");
  const [ selectedYear, setSelectedYear ] = useState("Select Year");
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
                    <Select options={departmentsList} defaultValue={selectedDepartment} onChange={selectedVal => {
                      setSelectedDepartment(selectedVal.value)
                    }} />
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Select options={batchesList} defaultValue={selectedBatch} onChange={selectedVal => {
                      setSelectedBatch(selectedVal.value)
                    }} />
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Select options={yearsList} defaultValue={selectedYear} onChange={selectedVal => {
                      setSelectedYear(selectedVal.value)
                    }} />
                  </div>
                </Grid>
                <Grid item xs={8} style={{ marginTop: 16 }}>
                  <Button variant={"contained"} color={"primary"} fullWidth>
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