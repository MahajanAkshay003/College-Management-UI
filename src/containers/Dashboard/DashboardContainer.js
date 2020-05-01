import React, { Fragment } from 'react';
import { Grid } from "@material-ui/core";
import Header from "../../components/Helpers/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const DashboardContainer = props => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BrowserRouter>
            <Switch>
              <Route path={"/dashboard"} render={props => <Dashboard { ...props } />} />
            </Switch>
          </BrowserRouter>
        </Grid>
      </Grid>
  )
};

export default DashboardContainer;