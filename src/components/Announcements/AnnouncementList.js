import React from 'react';
import {Chip, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const AnnouncementList = props => {
  return (
    <Paper elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Announcement</TableCell>
            <TableCell>Issuer</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>This is a test announcement</TableCell>
            <TableCell>Manoj Kumar</TableCell>
            <TableCell>12:00:00 PM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default AnnouncementList;