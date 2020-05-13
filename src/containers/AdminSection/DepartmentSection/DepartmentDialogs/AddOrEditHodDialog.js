import React, { useState, useEffect } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@material-ui/core";
import {KeyboardTimePicker} from "@material-ui/pickers";
import useGetFaculties from "../../../../remoteHooks/getFaculties";
import dropdownStyles from "../../../../styles/dropdownStyles";
import Select from "react-select";
import {addHodToDepartment} from "../../../../remoteMethods/Department/Department";

const AddOrEditHodDialog = props => {
  const { open, setOpen, department, isEdit, getRefreshedDepartmentData } = props;
  const departmentId = department ? department.id : null;
  const [ faculties, setStartSearch ] = useGetFaculties("", departmentId);
  const [ departmentHodId, setDepartmentHodId ] = useState();
  useEffect(() => {
    setStartSearch(true);
    console.log(department);
    if (isEdit && department) setDepartmentHodId(department.departmentHodId);
  }, [isEdit, department]);
  const handleClose = () => {
    setOpen(false);
    setDepartmentHodId(null);
  }
  const addOrEditDepartmentHod = () => {
    addHodToDepartment(department.id, departmentHodId)
      .then(() => {
        getRefreshedDepartmentData();
        handleClose();
      })
      .catch(error => handleClose());
  }
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"sm"} fullWidth>
      <DialogTitle>{ isEdit ? "Change Department HOD" : "Add Department HOD" }</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={10} style={{ marginBottom: 100 }}>
            <Select
              styles={dropdownStyles}
              options={faculties.map(faculty => ({ label: faculty.fullName, value: faculty.id }))}
              placeholder={"Choose HOD"}
              onChange={selectedVal => setDepartmentHodId(selectedVal.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={addOrEditDepartmentHod} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddOrEditHodDialog;