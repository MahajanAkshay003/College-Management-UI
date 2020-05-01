import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "./containers/Login/LoginContainer";
import Dashboard from "./containers/Dashboard/DashboardContainer";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path={"/login/:loginType"} render={ props => <LoginContainer { ...props } /> } />
          <Route path={"/dashboard"} render={ props => <Dashboard { ...props } /> } />
          <Redirect to={"/login/student"} render={ props => <LoginContainer { ...props } /> } />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
