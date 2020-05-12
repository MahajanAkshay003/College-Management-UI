import React, {Fragment, useState} from 'react';
import {AppBar, Avatar, Grid, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import AnnouncementList from "./AnnouncementList";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";
import QueryList from "../Queries/QueryList";

const Announcements = props => {
  const [ tabValue, setTableValue ] = useState(1);
  const showPanelByTabValue = () => {
    switch (tabValue) {
      case 0:
        return <AnnouncementList />
      case 1:
        return <QueryList />
      default:
    }
  }
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={4}>
            <Tabs
              value={tabValue}
              onChange={(event, newValue) => setTableValue(newValue)}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Announcements" />
              <Tab label="Queries" />
            </Tabs>
            {showPanelByTabValue()}
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Announcements;