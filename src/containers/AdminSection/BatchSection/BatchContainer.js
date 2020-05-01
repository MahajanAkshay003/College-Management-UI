import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from "@material-ui/core";

const BatchContainer = props => {
  const [ departmentName, setDepartmentName ] = useState("");
  const [ batchName, setBatchName ] = useState("");
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

export default BatchContainer;