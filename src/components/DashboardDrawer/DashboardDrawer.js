import React, { useState } from 'react';
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Home, Announcement, Face } from '@material-ui/icons/';
import { withRouter } from "react-router-dom";

const DashboardDrawer = props => {
  const [ value, setValue ] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0: return props.history.push("/dashboard");
      case 1: return props.history.push("/dashboard/announcements");
      case 2: return props.history.push("/dashboard/profile");
    }
  }
  return (
    <Paper elevation={4} style={{ height: window.outerHeight, position: "fixed", width: 100 }}>
      <Tabs
        value={value}
        orientation="vertical"
        onChange={handleChange}
        textColor="primary"
      >
        <Tab style={{ minWidth: "100px", fontSize: "10px" }} icon={<Home style={{ fontSize: 40, padding: 0 }} />} label="Dashboard" />
        <Tab style={{ minWidth: "100px", fontSize: "10px" }} icon={<Announcement style={{ fontSize: 40, padding: 0 }} />} label="Notify" />
        <Tab style={{ minWidth: "100px", fontSize: "10px" }} icon={<Face style={{ fontSize: 40, padding: 0 }} />} label={"My Profile"} />
      </Tabs>
    </Paper>
  );
};


export default withRouter(DashboardDrawer);