import React, {Fragment, useEffect} from 'react';
import {
  Grid, TextField, Menu, MenuItem, Button, Checkbox, FormControlLabel
} from "@material-ui/core"
import dropdownStyles from "../../../styles/dropdownStyles";
import useGetBatchesByDepartment from "../../../remoteHooks/getBatchesByDepartment";
import Select from "react-select";

const AddStudentAdditionalDetails = props => {
  const {
    currentAddress, setCurrentAddress,
    permanentAddress, setPermanentAddress,
    isOutsideDelhi, setOutsideDelhi,
    setQuota, departments, quota,
    departmentId, setDepartmentId, batchId,
    setBatchId, ipuRank, setIpuRank, batches,
    semester, setSemester, semesters, studentCategories
  } = props;
  return (
    <Fragment>
      <Grid container justify={"center"}> 
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <FormControlLabel control={
                  <Checkbox
                    checked={isOutsideDelhi}
                    onChange={event => setOutsideDelhi(event.target.checked)}
                    color="secondary"
                  />
                }
                label="Outside Delhi"
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 16, marginTop: 8 }}>
              <Select
                defaultValue={studentCategories.filter(category => category.value === quota)[0]}
                styles={dropdownStyles}
                options={studentCategories}
                placeholder={"Choose Category"}
                onChange={selectedVal => setQuota(selectedVal.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 16 }}>
              <Select
                defaultValue={departmentId && departments.filter(dep => dep.value === departmentId)[0]}
                styles={dropdownStyles}
                options={departments}
                placeholder={"Choose Department"}
                onChange={selectedVal => setDepartmentId(selectedVal.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 16 }}>
              <Select
                defaultValue={batchId && batches.filter(bat => bat.value === batchId)[0]}
                styles={dropdownStyles}
                options={batches}
                placeholder={"Choose Batch"}
                onChange={selectedVal => setBatchId(selectedVal.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 16 }}>
              <Select
                defaultValue={semester && semesters.filter(sem => sem.value == semester)[0]}
                styles={dropdownStyles}
                options={semesters}
                placeholder={"Choose Semester"}
                onChange={selectedVal => setSemester(selectedVal.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ marginBottom: 16 }}>
              <TextField
                label="IPU Rank"
                variant="outlined"
                value={ipuRank}
                onChange={event => setIpuRank(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={4}
                label="Current Address"
                variant="outlined"
                value={currentAddress}
                onChange={event => setCurrentAddress(event.target.value)}
                fullWidth
              />
              <TextField
                multiline
                rows={4}
                style={{ marginTop: "12px" }}
                label="Permanent Address"
                variant="outlined"
                value={permanentAddress}
                onChange={event => setPermanentAddress(event.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AddStudentAdditionalDetails;