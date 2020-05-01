import React from 'react';
import {Paper, Table, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";

const AdditionalDetails = props => {
  return (
    <Paper>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Current Department</Typography></TableCell>
            <TableCell>ECE</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Working Days</Typography></TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Duties</Typography></TableCell>
            <TableCell>
              Faculty, Exam Cell
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default AdditionalDetails;