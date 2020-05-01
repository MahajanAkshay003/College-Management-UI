import React, {Fragment, useState} from 'react';
import { Button, Paper, Typography, Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import StudentAddMarksDialog from "./StudentAddMarksDialog";

const StudentSemesterTabMarksPanel = props => {
  const { currentTab } = props;
  const [ isMarksEdit, setMarksEdit ] = useState(false);
  const [ isMarksDialogOpen, setMarksDialogOpen ] = useState(false);
  const addOrEditMarksOpenHandler = (isEdit, isOpen) => {
    setMarksEdit(isEdit);
    setMarksDialogOpen(isOpen);
  }
  const showPanelByCurrentTabValue = () => {
    return (
      <Paper style={{ padding: 16 }}>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant={"body2"}>
              Semester Marks Panel
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <ThemeProvider theme={theme}>
              <Button style={{ color: "white" }} onClick={() => addOrEditMarksOpenHandler(false,true)} color="primary" variant={"contained"} fullWidth>
                Add Marks
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Paper>
    )
  }
  return (
    <Fragment>
      {showPanelByCurrentTabValue()}
      <StudentAddMarksDialog
        isMarksDialogOpen={isMarksDialogOpen}
        isMarksEdit={isMarksEdit}
        addOrEditMarksOpenHandler={addOrEditMarksOpenHandler}
      />
    </Fragment>
  )
}

const theme = createMuiTheme({
  palette: {
    primary: { main: green[700] }
  }
})

export default StudentSemesterTabMarksPanel;