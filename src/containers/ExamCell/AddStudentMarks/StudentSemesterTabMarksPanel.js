import React, { Fragment } from 'react';
import {Paper, Typography} from "@material-ui/core";

const StudentSemesterTabMarksPanel = props => {
  const { currentTab } = props;
  const showPanelByCurrentTabValue = () => {
    return (
      <Paper style={{ padding: 16 }}>
        <Typography variant={"body2"}>
          Semester Marks Panel
        </Typography>
      </Paper>
    )
  }
  return (
    <Fragment>
      {showPanelByCurrentTabValue()}
    </Fragment>
  )
}

export default StudentSemesterTabMarksPanel;