import React, {useEffect, useState} from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Typography} from "@material-ui/core";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import AddFacultyAttendanceDialog from "./Dialogs/AddFacultyAttendanceDialog";
import {green, red} from "@material-ui/core/colors";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import {markAttendanceOfFaculty} from "../../../../remoteMethods/Faculty/Faculty";

const FacultyTable = props => {
  const [ tableHeaders, setTableHeaders ] = useState(["Faculty Name", "Department", "Working Days"])
  const [ isOpenAttendanceDialog, setOpenAttendanceDialog ] = useState(false);
  const [ selectedFaculty, setSelectedFaculty ] = useState({});
  const [selectedDate, handleDateChange] = useState(new Date());
  const { faculties, startSearch } = props;
  const markFacultyAbsent = async (facultyId) => {
    await markAttendanceOfFaculty(facultyId, getCurrentTimeStamp(), "", "", false, "entry");
    startSearch();
  }
  const getCurrentTimeStamp = () => {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime();
  }
  const markFacultyAttendance = async (facultyId, type, time, attendanceId) => {
    const selectedTime = `${time.getHours()}:${time.getMinutes()}`;
    console.log(attendanceId, "testing");
    if (type === "exit") {
      await markAttendanceOfFaculty(facultyId, getCurrentTimeStamp(), "", selectedTime, true, "exit", attendanceId);
    } else if (type === "entry") {
      await markAttendanceOfFaculty(facultyId, getCurrentTimeStamp(), selectedTime, "",true, "entry")
    }
    startSearch();
    setOpenAttendanceDialog(false);
  }
  useEffect(() => {
    if (props.view) setTableHeaders([...tableHeaders, "In Exam Cell"]);
    else setTableHeaders([...tableHeaders, "Actions"]);
  }, [])
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
            {faculties.map(faculty => (
              <TableRow key={faculty.id}>
                <TableCell component="th" scope="row">
                  {faculty.fullName}
                </TableCell>
                <TableCell>{faculty.department.departmentName}</TableCell>
                <TableCell>{faculty.workingDays}</TableCell>
                {
                  props.view && <TableCell>{faculty.isExamCellEmployee ? "Yes" : "No" }</TableCell>
                }
                {
                  !props.view &&  <TableCell>
                    {faculty.attendance.length === 0 ?
                      <ThemeProvider theme={theme}>
                        <Button variant="contained" color={faculty.attendance.length > 0 ? "primary" : "secondary"} style={{ color: "white" }} onClick={() => markFacultyAbsent(faculty.id)} style={{ marginRight: 16 }}>
                          Mark Leave
                        </Button>
                        <Button variant="contained" color={faculty.attendance.length > 0 ? "secondary" : "primary"} style={{ color: "white" }} onClick={() => {
                          setSelectedFaculty(faculty);
                          setOpenAttendanceDialog(true);
                        }}>
                          Entry Attendance
                        </Button>
                      </ThemeProvider>
                      :
                      <ThemeProvider theme={theme}>
                        {!faculty.attendance[0].isPresent && <Typography variant={"body2"}>Faculty on Leave</Typography>}
                        {faculty.attendance[0].isPresent && faculty.attendance[0].exitTime === "" && <Button variant="contained" color={faculty.attendance.length > 0 ? "secondary" : "primary"} style={{ color: "white" }} onClick={() => {
                          setSelectedFaculty(faculty);
                          setOpenAttendanceDialog(true);
                        }} style={{ marginRight: 16 }}>
                          {faculty.attendance.length > 0 ? "Exit Attendance" : "Entry Attendance" }
                        </Button>}
                        {faculty.attendance[0].isPresent && faculty.attendance[0].exitTime !== "" && <Typography variant={"body2"}>Faculty has left</Typography>}
                      </ThemeProvider>
                    }
                  </TableCell>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {isOpenAttendanceDialog && <AddFacultyAttendanceDialog
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          facultyId={selectedFaculty.id}
          isOpenAttendanceDialog={isOpenAttendanceDialog}
          setOpenAttendanceDialog={setOpenAttendanceDialog}
          facultyAttendance={selectedFaculty.attendance}
          markFacultyAttendance={markFacultyAttendance}
        />}
      </Paper>
    </MuiPickersUtilsProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  }
});

export default FacultyTable;