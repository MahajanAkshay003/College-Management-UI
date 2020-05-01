import React, {Fragment} from 'react';
import { Grid } from "@material-ui/core";
import AddUserSection from "./AddUserSection";
import DepartmentSection from "./DepartmentSection";
import DashboardDrawer from "../../components/DashboardDrawer/DashboardDrawer";

const AdminSection = props => {
  return (
    <Grid container justify={"center"} spacing={0}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AddUserSection />
          </Grid>
          <Grid item xs={12}>
            <DepartmentSection />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminSection;