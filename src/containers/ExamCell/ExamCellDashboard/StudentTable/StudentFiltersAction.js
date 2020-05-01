import React, {useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";

const StudentFilters = props => {
  const [ name, setName ] = useState("");
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <TextField
          label="Student Name"
          variant="outlined"
          value={name}
          autoFocus
          onChange={event => setName(event.target.value)}
          margin={"dense"}
          fullWidth
        />
      </Grid>
      <Grid item xs={4} style={{ paddingTop: 12 }}>
         <Button variant={"contained"} color={"primary"} fullWidth>
          Send Anouncement
        </Button>
      </Grid>
      <Grid item xs={4} style={{ paddingTop: 12 }}>
        <Button variant={"contained"} color={"secondary"} fullWidth>
          Send Mail
        </Button>
      </Grid>
    </Grid>
  );
}

export default StudentFilters;