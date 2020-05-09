import React from 'react';
import { withRouter } from "react-router-dom";
import {Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Paper, Button} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const StudentsTable = props => {
  const tableHeaders = ["Name", "Roll Number", "Current Semester", "Department", "Batch", "Actions"];
  const { students } = props;
  const addEditMarksHandler = studentId => {
    props.history.push(`/dashboard/editMarks/${studentId}`);
  }
  return (
    <Paper elevation={3}>
      <Table size={'medium'}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                // indeterminate={numSelected > 0 && numSelected < rowCount}
                // checked={rowCount > 0 && numSelected === rowCount}
                // onChange={onSelectAllClick}
                // inputProps={{'aria-label': 'select all desserts'}}
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
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row" padding="none">
                {student.fullName}
              </TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>{student.semester}</TableCell>
              <TableCell>{student.department.departmentName}</TableCell>
              <TableCell>{student.batch.batchName}</TableCell>
              <TableCell>
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" style={{ color: "white" }} onClick={() => addEditMarksHandler(10)}>
                    Add / Edit Marks
                  </Button>
                </ThemeProvider>
              </TableCell>
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

export default withRouter(StudentsTable);