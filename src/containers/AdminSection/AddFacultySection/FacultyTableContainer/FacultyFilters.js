import React from 'react';
import {Button, Grid, TextField} from "@material-ui/core";
import Select from "react-select";

const FacultyFilters = props => {
  const { departments, setDepartmentId, startSearch, setFullName, fullName } = props;
  return (
    <Grid container spacing={1}>
      <Grid item xs={5}>
        <TextField
          label="Faculty Name"
          variant="outlined"
          value={fullName}
          autoFocus
          onChange={event => setFullName(event.target.value)}
          margin={"dense"}
          fullWidth
        />
      </Grid>
      <Grid item xs={4} style={{ paddingTop: 12 }}>
        <Select options={departments} onChange={selectedVal => setDepartmentId(selectedVal.value)} />
      </Grid>
      <Grid item xs={3} style={{ marginTop: -2 }}>
        <Button variant={"contained"} color={"secondary"} fullWidth style={{ marginTop: 10 }} onClick={() => startSearch()}>
          Search Faculty
        </Button>
      </Grid>
    </Grid>
  );
}

export default FacultyFilters;