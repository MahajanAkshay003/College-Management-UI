import React from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Paper} from "@material-ui/core";

const StudentsTable = props => {
  const tableHeaders = ["Name", "Roll Number", "Percentage", "Current Year", "Year of Joining"];
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
            <TableCell>2016</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default StudentsTable;