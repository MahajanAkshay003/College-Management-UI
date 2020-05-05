import React from 'react';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";

const ListSubjectTable = props => {
  const tableHeaders = ["Code", "Name", "Semester", "Credits", "Department", "Actions"];
  const { subjects } = props;
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
            {subjects ?
              subjects.map((subject) => (
                <TableRow key={subject.subjectId}>
                  <TableCell>{subject.subjectId}</TableCell>
                  <TableCell>{subject.subjectName}</TableCell>
                  <TableCell>{subject.semester}</TableCell>
                  <TableCell>{subject.credits}</TableCell>
                  <TableCell>{subject.department.departmentName}</TableCell>
                  <TableCell>
                    <ThemeProvider theme={theme}>
                      <Button variant="contained" color="primary" style={{ color: "white" }} onClick={() => {}}>
                        Edit Subject
                      </Button>
                    </ThemeProvider>
                  </TableCell>
                </TableRow>
              ))
              :
              <TableRow>
                <TableCell>Please, search subjects via filters to continue.</TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    </MuiPickersUtilsProvider>
  );
}

const theme = createMuiTheme({
  palette: { primary: green }
});

export default ListSubjectTable;