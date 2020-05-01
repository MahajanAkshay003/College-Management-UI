import React, { useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardTimePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";

const AddFacultyAttendanceDialog = props => {
  const { isOpenAttendanceDialog, setOpenAttendanceDialog } = props;
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleClose = () => {
    setOpenAttendanceDialog(false);
  }
  return (
    <Dialog open={isOpenAttendanceDialog} onClose={handleClose} maxWidth={"sm"} fullWidth>
      <DialogTitle>Mark Faculty Attendance</DialogTitle>
      <DialogContent>
        <KeyboardTimePicker
          fullWidth
          value={selectedDate}
          label="Mark Entry Time"
          onChange={handleDateChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Save Attendance
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddFacultyAttendanceDialog;