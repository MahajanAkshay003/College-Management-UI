import React from 'react';
import {Paper, Table, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";

const ParentDetails = props => {
  return (
    <Paper>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Father's Name</Typography></TableCell>
            <TableCell>14-02-1998</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Father's Email</Typography></TableCell>
            <TableCell>1696</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Father's Mobile Number</Typography></TableCell>
            <TableCell>No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Mother's Name</Typography></TableCell>
            <TableCell>14-02-1998</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Mother's Email</Typography></TableCell>
            <TableCell>14-02-1998</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Mother's Mobile Number</Typography></TableCell>
            <TableCell>14-02-1998</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ParentDetails;