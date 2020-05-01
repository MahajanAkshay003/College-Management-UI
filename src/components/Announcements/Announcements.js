import React, { Fragment } from 'react';
import {AppBar, Avatar, Grid, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import AnnouncementList from "./AnnouncementList";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";

const Announcements = props => {
  const { isDrawerOpen, setDrawerOpen } = props;
  return (
    <Fragment>
      <DashboardDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Grid container style={{ padding: "16px" }}>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <Paper>
            <AppBar position="static" color="default">
              <Typography variant={"h4"} style={{
                padding: "16px",
                fontWeight: 300,
                textAlign: "center"
              }}>
                Announcements
              </Typography>
            </AppBar>
            <AnnouncementList />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Announcements;