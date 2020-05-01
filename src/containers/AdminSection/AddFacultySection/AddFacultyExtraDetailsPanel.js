import React from 'react';
import { Grid, TextField, FormControlLabel, Checkbox } from "@material-ui/core";

const AddFacultyExtraDetailsPanel = props => {
  const {
    highestEducation, setHighestEducation,
    prefix, setPrefix,
    workingDays, setWorkingDays,
    isExamCellEmployee, setExamCellEmployee
  } = props;
  return (
    <Grid container justify={"center"}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                style={{ marginTop: "12px" }}
                label="Highest Education"
                variant="outlined"
                value={highestEducation}
                onChange={event => setHighestEducation(event.target.value)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Prefix"
                variant="outlined"
                value={prefix}
                onChange={event => setPrefix(event.target.value)}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Number of working days"
                variant="outlined"
                value={workingDays}
                onChange={event => setWorkingDays(event.target.value)}
                fullWidth
              />
              <FormControlLabel
                style = {{ marginTop: 8 }}
                control={
                  <Checkbox
                    checked={isExamCellEmployee}
                    onChange={event => setExamCellEmployee(event.target.checked)}
                  />
                }
                label="Exam Cell Employee"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default AddFacultyExtraDetailsPanel;