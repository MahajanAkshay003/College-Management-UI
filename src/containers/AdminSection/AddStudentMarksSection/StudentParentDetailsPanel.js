import React, {Fragment} from 'react';
import useForm from 'react-hook-form';
import {FormControlLabel, Grid, Radio, RadioGroup, TextField} from "@material-ui/core";

const StudentParentDetailsPanel = props => {
  const { register, errors } = useForm();
  return (
    <Fragment>
      <Grid container justify={"center"}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                style={{ marginTop: "12px" }}
                label="Father's First Name"
                name={"fatherFirstName"}
                ref={register}
                variant="outlined"
                autoFocus={true}
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Father's Middle Name"
                name={"fatherMiddleName"}
                ref={register}
                variant="outlined"
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Father's Last Name"
                name={"fatherLastName"}
                ref={register}
                variant="outlined"
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Mother's First Name"
                name={"motherFirstName"}
                ref={register}
                variant="outlined"
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Mother's Middle Name"
                name={"motherMiddleName"}
                ref={register}
                variant="outlined"
                fullWidth
              />
              <TextField
                style={{ marginTop: "12px" }}
                label="Mother's Last Name"
                name={"motherLastName"}
                ref={register}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default StudentParentDetailsPanel;