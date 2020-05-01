import React, {useState} from 'react';
import { Grid, TextField, Button } from "@material-ui/core";
import Select from 'react-select';

const FacultyFilters = props => {
  const [ name, setName ] = useState("");
  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <TextField
          label="Faculty Name"
          variant="outlined"
          placeholder={"Search Faculty by Name"}
          value={name}
          autoFocus
          onChange={event => setName(event.target.value)}
          margin={"dense"}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant={"contained"} color={"secondary"} fullWidth style={{ marginTop: 10 }}>
          Search Faculty
        </Button>
      </Grid>
    </Grid>
  );
}

export default FacultyFilters;