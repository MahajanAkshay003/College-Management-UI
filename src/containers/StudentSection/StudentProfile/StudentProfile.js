import React, { useState, Fragment } from 'react';
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails, Chip,
} from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DashboardDrawer from "../../../components/DashboardDrawer/DashboardDrawer";
import CollegePerformanceDetails from "./CollegePerformanceDetails";
import PersonalDetails from "./PersonalDetails";
import ParentDetails from "./ParentDetails";

const StudentProfile = props => {
  const [ expandedPanel, setExpandedPanel ] = useState(-1);
  const renderProfilePanels = () => {
    const panels = [
      { label: "Personal Details", component: <PersonalDetails /> },
      { label: "Parent Details", component: <ParentDetails /> },
      { label: "College Performance Details", component: <CollegePerformanceDetails /> }
      ];
    return panels.map((panel, index) => (
      <ExpansionPanel expanded={expandedPanel === index} onChange={() => {
        if (expandedPanel === index) setExpandedPanel(-1);
        else setExpandedPanel(index);
      }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={"h6"} style={{ fontWeight: 300, flexBasis: "50%" }}>{panel.label}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container style={{ marginTop: "-16px" }}>
            <Grid item xs={12}>
              {panel.component}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      ));
  };
  return (
      <Grid container justify={"center"} style={{ padding: "16px" }}>
        <Grid item xs={12}>
          <Grid container justify={"center"}>
            <Grid item xs={12}>
              <CardMedia component={"img"} style={{
                width: "120px",
                height: "120px",
                position: "relative",
                left: "45%",
                zIndex: "1000",
              }} image={require("../../../assets/student-male.png")} />
            </Grid>
            <Grid item xs={6}>
              <Card style={{ position: "relative", top: "-32px" }} elevation={4}>
                <CardActionArea style={{ textAlign: "center", paddingTop: "24px" }}>
                  <CardContent>
                    <Typography variant={"h4"} style={{ fontWeight: 300 }}>
                      AkShay Mahajan
                    </Typography>
                    <Typography variant={"body1"} style={{ fontWeight: 400 }}>
                      Roll Number: 00811502816
                    </Typography>
                    <div style={{ marginTop: "8px" }}>
                      <Chip label="vomaksh@gmail.com" />
                    </div>
                    <div style={{ marginTop: "8px" }}>
                      <Chip label="Student" color={"secondary"} />
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "-24px" }}>
              {renderProfilePanels()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default StudentProfile;