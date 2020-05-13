import React from 'react';
import {Button, Grid, TextField} from "@material-ui/core";

const TnpFilters = props => {
  const { fullName, setFullName, startSearch } = props;
  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <TextField
          label="Name"
          variant="outlined"
          value={fullName}
          autoFocus
          onChange={event => setFullName(event.target.value)}
          margin={"dense"}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant={"contained"} color={"secondary"} fullWidth style={{ marginTop: 10 }} onClick={() => startSearch()}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default TnpFilters;