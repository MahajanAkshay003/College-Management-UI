import React, {Fragment, useEffect, useState} from 'react';
import { Grid, CircularProgress } from "@material-ui/core";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginTypeSwitcher from "../../components/LoginForm/LoginTypeSwitcher";
import Spinner from "../../components/Helpers/Spinner/Spinner";
import NotificationCustomHook from "../../CustomHooks/NotificationCustomHook";

const LoginContainer = props => {
  const [ isLoading, setLoading ] = useState(false);
  useEffect(() => {
    const loginTypes = ["student", "admin", "faculty", "examcell"];
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    if (localStorage.getItem("token")) return props.history.push("/dashboard");
    if (!loginTypes.includes(props.match.params.loginType)) return props.history.push("/");
  }, [props.match.params.loginType]);
  return (
    <Fragment>
      <div style={{ width: "100%", height: window.innerHeight - 16, margin: 0 }}>
        <Grid container justify={"center"} style={{ padding: "6% 0" }}>
          {isLoading ?
            <div style={{ position: "absolute", margin: "auto", padding: "10% 0" }}>
              <CircularProgress size={64} />
            </div>
            :
            <Grid item xs={8} md={6} lg={4}>
              <LoginForm loginType={props.match.params.loginType} />
              <div style={{ position: "fixed", right: 32, bottom: 32 }}>
                <LoginTypeSwitcher />
              </div>
            </Grid>
          }
        </Grid>
      </div>
    </Fragment>
  );
};

export default LoginContainer;