import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Paper, Button} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const StudentsTable = props => {
  const [ tableHeaders, setTableHeaders ] = useState(["Name", "Roll Number", "Current Semester", "Department", "Batch"]);
  const { students, selectedStudents, setSelectedStudents } = props;
  useEffect(() => {
    if (props.user.userType === "examcell") setTableHeaders([...tableHeaders, "Action"]);
  }, []);
  const addEditMarksHandler = studentId => {
    props.history.push(`/dashboard/editMarks/${studentId}`);
  }
  const selectStudentCheckboxHandler = (event, studentId) => {
    if (event.target.checked) setSelectedStudents([...selectedStudents, studentId]);
    else setSelectedStudents(selectedStudents.filter(id => id !== studentId));
  }
  const selectAllStudentsCheckboxHandler = event => {
    if (event.target.checked) setSelectedStudents(students.map(student => student.id));
    else setSelectedStudents([]);
  }
  const isStudentSelected = studentId => !!selectedStudents.find(id => id === studentId);
  return (
    <Paper elevation={3}>
      <Table size={'medium'}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedStudents.length === students.length}
                onChange={selectAllStudentsCheckboxHandler}
              />
            </TableCell>
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
          {students.map((student) => (
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isStudentSelected(student.id)}
                  onChange={(event) => selectStudentCheckboxHandler(event, student.id)}
                />
              </TableCell>
              <TableCell component="th" scope="row" padding="none">
                {student.fullName}
              </TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>{student.semester}</TableCell>
              <TableCell>{student.department.departmentName}</TableCell>
              <TableCell>{student.batch.batchName}</TableCell>
              {props.user.userType === "examcell" && <TableCell>
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" style={{ color: "white" }} onClick={() => addEditMarksHandler(student.id)}>
                    Add / Edit Marks
                  </Button>
                </ThemeProvider>
              </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

const theme = createMuiTheme({
  palette: { primary: green }
});

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(StudentsTable));