import React from 'react';
import { Grid, Button } from "@material-ui/core";

const StudentActions = props => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Button variant={"contained"} color={"primary"} fullWidth>
          Send Anouncement
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant={"contained"} color={"primary"} fullWidth>
          Generate CSV
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant={"contained"} color={"primary"} fullWidth>
          Send Mail
        </Button>
      </Grid>
    </Grid>
  )
}

export default StudentActions;