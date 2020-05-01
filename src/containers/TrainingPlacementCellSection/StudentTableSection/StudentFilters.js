import React, {useState} from 'react';
import { Grid, TextField } from "@material-ui/core";
import Select from 'react-select';

const StudentFilters = props => {
  const [ name, setName ] = useState("");
  const studentStatusesList = [{ value: "back", label: "Has Backs" }, { value: "pass", label: "Has no Backs" }]
  const studentPercentagesList = [{ value: "60", label: "Above 60%" }, { value: "70", label: "Above 70%" }, { value: "75", label: "Above 75%" }];
  const [ studentStatus, setStudentStatus ] = useState("all");
  const [ studentPercentage, setStudentPercentage ] = useState("all");
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
        <Select options={studentStatusesList} defaultValue={studentStatus} onChange={selectedVal => setStudentStatus(selectedVal.value)} />
      </Grid>
      <Grid item xs={4} style={{ paddingTop: 12 }}>
        <Select options={studentPercentagesList} defaultValue={studentPercentage} onChange={selectedVal => setStudentPercentage(selectedVal.value)} />
      </Grid>
    </Grid>
  );
}

export default StudentFilters;