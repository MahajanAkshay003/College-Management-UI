import React, {Fragment, useState} from 'react';
import DashboardDrawer from "../../../components/DashboardDrawer/DashboardDrawer";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Chip,
  ExpansionPanel,
  ExpansionPanelSummary, ExpansionPanelDetails
} from "@material-ui/core";
import PersonalDetails from "./PersonalDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AdditionalDetails from "./AdditionalDetails";

const FacultyProfile = props => {
  const { isDrawerOpen, setDrawerOpen } = props;
  const [ expandedPanel, setExpandedPanel ] = useState(-1);
  const renderProfilePanels = () => {
    const panels = [
      { label: "Personal Details", component: <PersonalDetails /> },
      { label: "Additional Details", component: <AdditionalDetails /> }
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
    <Fragment>
      <DashboardDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Grid container justify={"center"} style={{ padding: "8px", paddingTop: "24px" }}>
        <Grid item xs={12}>
          <CardMedia component={"img"} style={{
            width: "120px",
            height: "120px",
            position: "relative",
            left: "45%",
            zIndex: "1000",
          }} image={require("../../../assets/student-male.png")} />
        </Grid>
        <Grid item xs={4}>
          <Card style={{ position: "relative", top: "-32px" }} elevation={4}>
            <CardActionArea style={{ textAlign: "center", paddingTop: "24px" }}>
              <CardContent>
                <Typography variant={"h4"} style={{ fontWeight: 300 }}>
                  Mr. Manoj Kumar
                </Typography>
                <Typography variant={"body1"} style={{ fontWeight: 400, marginTop: "4px" }}>
                  Faculty ID: 123456
                </Typography>
                <div style={{ marginTop: "8px" }}>
                  <Chip label="manojkumar@gmail.com" />
                </div>
                <div style={{ marginTop: "8px" }}>
                  <Chip label="Faculty" color={"secondary"} style={{ marginRight: "4px" }} />
                  <Chip label="Exam Cell" color={"primary"} />
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={10} style={{ marginTop: "-24px" }}>
          {renderProfilePanels()}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default FacultyProfile;
