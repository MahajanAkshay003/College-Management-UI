import React, { useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardTimePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";

const AddFacultyAttendanceDialog = props => {
  const { selectedDate, handleDateChange, facultyId, isOpenAttendanceDialog, setOpenAttendanceDialog, facultyAttendance, markFacultyAttendance } = props;
  const handleClose = () => setOpenAttendanceDialog(false);
  const saveAttendance = () => {
    if (facultyAttendance.length === 0) {
      markFacultyAttendance(facultyId, "entry", selectedDate);
    } else if (facultyAttendance.length > 0) {
      markFacultyAttendance(facultyId, "exit", selectedDate, facultyAttendance[0].id);
    }
  }
  return (
    <Dialog open={isOpenAttendanceDialog} onClose={handleClose} maxWidth={"sm"} fullWidth>
      <DialogTitle>Mark Faculty Attendance</DialogTitle>
      <DialogContent>
        <KeyboardTimePicker
          fullWidth
          value={selectedDate}
          label={facultyAttendance.length === 0 ? "Mark Entry Time" : "Mark Exit Time"}
          onChange={handleDateChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={saveAttendance} color="primary">
          Save Attendance
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddFacultyAttendanceDialog;