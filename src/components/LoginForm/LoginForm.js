import React, {useState, Fragment, useEffect} from 'react';
import axios from 'axios';
import { Paper, Typography, Button, Chip } from "@material-ui/core";
import logo from "../../assets/bvcoe_logo.png";
import { Grid, TextField, LinearProgress } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { blue } from "@material-ui/core/colors";

const LoginForm = props => {
  const [ step, setStep ] = useState(0);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  useEffect(() => {
    if (step === 1 && email !== "") setTimeout(() => setStep(2), 1000);
  });
  const getLoginType = () => props.loginType[0].toUpperCase() + props.loginType.substring(1);
  const loginButtonHandler = () => {

  }
  return (
    <Fragment>
      {step === 1 && <LinearProgress style={{ height: "6px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", position: "relative", top: "6px" }} /> }
      <Paper elevation={3} style={{ padding: "32px", textAlign: "center" }}>
        {step === 0 || step === 1 ?
          <div>
            <img src={logo} style={{ width: "150px", height: "100px" }} />
            <Typography variant={"h5"} style={{ fontWeight: 300, marginBottom: "4px" }}>
              {getLoginType()} Sign in
            </Typography>
            <Typography variant={"body1"}>
              to continue to College Portal
            </Typography>
            <Grid container style={{ marginTop: "8px" }}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  margin="normal"
                  variant={"outlined"}
                  autoFocus={true}
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"body2"} style={{ textAlign: "left" }}>
                  Not your computer? Use Guest mode to sign in privately.
                </Typography>
              </Grid>
              <Grid container style={{ textAlign: "left", marginTop: "64px" }}>
                <Grid item xs={9}>
                  <Typography variant={"body2"} style={{
                    color: blue[500],
                    fontWeight: 600,
                    position: "relative",
                    top: 8
                  }}>
                    Report Issue
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Button variant={"contained"} color={"primary"} fullWidth onClick={() => setStep(1)}>
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
          : <div>
            <img src={logo} style={{ width: "150px", height: "100px" }} />
            <Typography variant={"h5"} style={{ fontWeight: 300, marginBottom: "4px" }}>
              Welcome
            </Typography>
            <Chip icon={<FaceIcon />} label={email} />
            <Grid container style={{ marginTop: "8px" }}>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type={"password"}
                  margin="normal"
                  variant={"outlined"}
                  autoFocus={true}
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"body2"} style={{ textAlign: "left" }}>
                  Not your computer? Use Guest mode to sign in privately.
                </Typography>
              </Grid>
              <Grid container style={{ textAlign: "left", marginTop: "64px" }}>
                <Grid item xs={3}>
                  <Button variant={"contained"} color={"primary"} fullWidth onClick={() => {
                    setEmail("");
                    setPassword("");
                    setStep(0);
                  }}>
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={3}>
                  <Button variant={"contained"} color={"primary"} fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div> }
      </Paper>
    </Fragment>
  );
}

export default LoginForm;