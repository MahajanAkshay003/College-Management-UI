import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from "@material-ui/core";

const DepartmentContainer = props => {
  const [ departmentName, setDepartmentName ] = useState("");
  const [ departmentDescription, setDepartmentDescription ] = useState("");
  const [ departmentHodName, setDepartmentHodName ] = useState("");
  return (
    <Grid container justify={"center"} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify={"center"} style={{ paddingTop: "8px" }}>
          <Grid item xs={6} style={{ textAlign: "center"}}>
            <Typography variant={"h4"} style={{ fontWeight: 300 }}>
              Add New Department
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify={"center"} style={{ marginTop: 16 }}>
          <Grid item xs={6}>
            <TextField
              label="Department Name"
              variant="outlined"
              autoFocus={true}
              value={departmentName}
              onChange={event => setDepartmentName(event.target.value)}
              fullWidth
            />
            <TextField
              style={{ marginTop: "12px" }}
              label="Department Description"
              variant="outlined"
              value={departmentDescription}
              onChange={event => setDepartmentDescription(event.target.value)}
              fullWidth
            />
            <TextField
              style={{ marginTop: "12px" }}
              label="Department HOD"
              variant="outlined"
              value={departmentHodName}
              onChange={event => setDepartmentHodName(event.target.value)}
              fullWidth
            />
            <Grid container justify={"flex-end"}>
              <Grid item xs={3}>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                  onClick={() => {}}
                  fullWidth
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DepartmentContainer;