import React from 'react';
import { withRouter } from "react-router-dom";
import {Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Paper, Button} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const StudentsTable = props => {
  const tableHeaders = ["Name", "Roll Number", "Current Year", "Year of Joining", "Actions"];
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
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell component="th" scope="row" padding="none">
              Akshay Mahajan
            </TableCell>
            <TableCell>00811502816</TableCell>
            <TableCell>71%</TableCell>
            <TableCell>Fourth</TableCell>
            <TableCell>
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" style={{ color: "white" }} onClick={() => addEditMarksHandler(10)}>
                  Add / Edit Marks
                </Button>
              </ThemeProvider>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

const theme = createMuiTheme({
  palette: { primary: green }
});

export default withRouter(StudentsTable);