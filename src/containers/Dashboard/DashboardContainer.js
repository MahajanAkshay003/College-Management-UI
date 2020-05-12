import React, {Fragment, useEffect, useState} from 'react';
import {CircularProgress, Grid} from "@material-ui/core";
import Header from "../../components/Helpers/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import {getUserByToken} from "../../remoteMethods/CollegeUser/CollegeUser";
import {loginUserAction} from "../../actions/CollegeUser/actionObjects/collegeUserActions";

const DashboardContainer = props => {
  const { user } = props;
  const [ isLoading, setLoading ] = useState(true);
  useEffect(()  => {
    if (user.isAuthenticated) {
      setLoading(false);
      props.history.push("/dashboard");
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        getUserByToken(token).then(user => {
          props.loginUser(user);
          setLoading(false);
          props.history.push("/dashboard");
        }).catch(error => {
          localStorage.clear();
          setLoading(false);
          props.history.push("/");
        })
      } else {
        setLoading(false);
        props.history.push("/");
      }
    }
  }, []);
  return (
      <Grid container spacing={2}>
        {
          isLoading ?
            <div style={{ position: "absolute", margin: "auto", padding: "10% 0" }}>
              <CircularProgress size={64} />
            </div>
          :
            <Grid item xs={12}>
              <BrowserRouter>
                <Switch>
                  <Route path={"/dashboard"} render={props => <Dashboard { ...props } />} />
                </Switch>
              </BrowserRouter>
            </Grid>
        }
      </Grid>
  )
};

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  loginUser: payload => dispatch(loginUserAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);