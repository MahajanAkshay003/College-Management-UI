import React, {Fragment, useState} from 'react';
import {AppBar, Avatar, Grid, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import AnnouncementList from "./AnnouncementList";
import DashboardDrawer from "../DashboardDrawer/DashboardDrawer";
import QueryList from "../Queries/QueryList";
import FacultyQueryList from "../Queries/FacultyQueryList";

const Announcements = props => {
  const [ tabValue, setTableValue ] = useState(0);
  const showPanelByTabValue = () => {
    switch (tabValue) {
      case 0:
        return <AnnouncementList />
      case 1:
        if (props.user.userType === "student") {
          return <QueryList />
        } else if (props.user.userType === "faculty") {
          return <FacultyQueryList />
        }
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
              { (props.user.userType === "student" || props.user.userType === "faculty") && <Tab label="Queries" />}
            </Tabs>
            {showPanelByTabValue()}
          </Paper>
        </Grid>
      </Grid>

    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Announcements);