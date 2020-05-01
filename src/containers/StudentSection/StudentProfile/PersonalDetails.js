import React from 'react';
import {Paper, Table, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";

const PersonalDetails = props => {
  return (
    <Paper>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Date of Birth</Typography></TableCell>
            <TableCell>14-02-1998</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>IPU Rank</Typography></TableCell>
            <TableCell>1696</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Outside Delhi</Typography></TableCell>
            <TableCell>No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Current Address</Typography></TableCell>
            <TableCell>14-02-1998</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography variant={"body2"} style={{ fontWeight: 500 }}>Permanent Address</Typography></TableCell>
            <TableCell>14-02-1998</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PersonalDetails;