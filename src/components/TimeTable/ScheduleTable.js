import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Divider } from "@material-ui/core";

const ScheduleTable = props => {
  return (
    <Paper elevation={3}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Timings</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Tasks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timings.map((timing, index) => {
            if (index <= timings.length - 2) {
              return <TableRow key={timing}>
                <TableCell component="th" scope="row">
                  <Chip color={"primary"} label={timing} />
                  <Divider style={{ marginLeft: "4px", marginRight: "4px", width: "6px", height: '1px', backgroundColor: "grey", display: "inline-block" }} />
                  <Chip style={{ color: "white", backgroundColor: "green" }} label={timings[index + 1]} />
                </TableCell>
                <TableCell>Physics</TableCell>
                <TableCell>
                  <Chip label={"Assignment"} />
                </TableCell>
              </TableRow>
            } else return null;
          })}
        </TableBody>
      </Table>
    </Paper>
  )
};

const timings = [
  "8:40 AM",
  "9:30 AM",
  "10:20 AM",
  "11:10 AM",
  "12:00 PM",
  "12:50 PM",
  "1:40 PM",
  "2:30 PM",
  "3:20 PM",
  "4:10 PM",
  "5:00 PM"
];

export default ScheduleTable;