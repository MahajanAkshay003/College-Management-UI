import React, { useState } from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody, Button, Paper} from "@material-ui/core";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import AddFacultyAttendanceDialog from "./Dialogs/AddFacultyAttendanceDialog";
import {green} from "@material-ui/core/colors";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

const FacultyTable = props => {
  const tableHeaders = ["Faculty Name", "Department", "Working Days", "Actions"];
  const [ isOpenAttendanceDialog, setOpenAttendanceDialog ] = useState(false);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper elevation={3}>
        <Table size={'medium'}>
          <TableHead>
            <TableRow>
              {tableHeaders.map((tableHeader, index) => (
                <TableCell
                  key={index}
                  align={'left'}
                  padding={'default'}
                  sortDirection={false}
                >
                  {tableHeader}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Akshay Mahajan
              </TableCell>
              <TableCell>ECE</TableCell>
              <TableCell>7</TableCell>
              <TableCell>
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" style={{ color: "white" }} onClick={() => setOpenAttendanceDialog(true)}>
                    Mark Attendance
                  </Button>
                </ThemeProvider>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <AddFacultyAttendanceDialog isOpenAttendanceDialog={isOpenAttendanceDialog} setOpenAttendanceDialog={setOpenAttendanceDialog} />
      </Paper>
    </MuiPickersUtilsProvider>
  );
}

const theme = createMuiTheme({
  palette: { primary: green }
});

export default FacultyTable;