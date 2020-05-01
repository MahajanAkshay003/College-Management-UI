import React, { Fragment, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Divider, Typography, Chip, AppBar, Tabs, Tab, Avatar } from "@material-ui/core";
import { green, pink, orange, indigo, purple } from "@material-ui/core/colors";
import ScheduleTable from "./ScheduleTable";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const TimeTable = props => {
  const [ dayIndex, setDayIndex ] = useState(0);
  const { isDrawerOpen, setDrawerOpen } = props;
  return (
    <Fragment>
      <Grid container justify={"center"} style={{ padding: "16px" }}>
        <Grid item xs={12}>
          <Paper>
            <AppBar position="static" color="default">
              <Typography variant={"h4"} style={{ padding: "16px", fontWeight: 300, textAlign: "center"}}>Time Table</Typography>
              <Tabs value={dayIndex} centered scrollButtons="on" indicatorColor="primary" onChange={(event, newValue) => setDayIndex(newValue)}>
                <Tab label="Monday" icon={<Avatar style={{ backgroundColor: orange[500] }}>M</Avatar>} />
                <Tab label="Tuesday" icon={<Avatar style={{ backgroundColor: pink[500] }}>T</Avatar>} />
                <Tab label="Wednesday" icon={<Avatar style={{ backgroundColor: green[800] }}>W</Avatar>} />
                <Tab label="Thursday" icon={<Avatar style={{ backgroundColor: indigo[700] }}>T</Avatar>} />
                <Tab label="Friday" icon={<Avatar style={{ backgroundColor: purple[700] }}>F</Avatar>} />
              </Tabs>
            </AppBar>
            <ScheduleTable />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const styles = makeStyles(() => ({
  time: {

  }
}))

export default TimeTable;