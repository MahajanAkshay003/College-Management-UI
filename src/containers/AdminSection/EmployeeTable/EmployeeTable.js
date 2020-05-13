import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";

const EmployeeTable = props => {
  const tableHeaders = ["First Name", "Middle Name", "Last Name", "Email"];
  const { employees } = props;
  return (
    <Paper>
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
          {employees && employees.map(employee => (
            <TableRow key={employee.id}>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.middleName}</TableCell>
              <TableCell>{employee.lastName}</TableCell>
              <TableCell>{employee.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default EmployeeTable;