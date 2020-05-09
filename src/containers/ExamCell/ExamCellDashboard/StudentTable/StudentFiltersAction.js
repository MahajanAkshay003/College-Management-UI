import React, {useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";
import AnnouncementDialog from "./Dialogs/AnnouncementDialog";
import MailDialog from "./Dialogs/MailDialog";

const StudentFilters = props => {
  const { fullName, setFullName, startSearch } = props;
  const [ isOpenAnnouncementDialog, setOpenAnnouncementDialog ] = useState(false);
  const [ isOpenSendMailDialog, setOpenSendMailDialog ] = useState(false);
  const handleAnnouncementButton = isOpen => {
    setOpenAnnouncementDialog(isOpen);
  }
  const handleSendMailButton = isOpen => {
    setOpenSendMailDialog(isOpen);
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <TextField
          label="Student Name"
          variant="outlined"
          value={fullName}
          autoFocus
          onChange={event => setFullName(event.target.value)}
          margin={"dense"}
          fullWidth
        />
      </Grid>
      <Grid item xs={2} style={{ paddingTop: 12 }}>
        <Button variant={"contained"} style={{ backgroundColor: "blue", color: "white" }} onClick={startSearch} fullWidth>
          Search
        </Button>
      </Grid>
      <Grid item xs={3} style={{ paddingTop: 12 }}>
         <Button variant={"contained"} color={"primary"} onClick={() => handleAnnouncementButton(true)} fullWidth>
            Send Anouncement
          </Button>
      </Grid>
      <Grid item xs={3} style={{ paddingTop: 12 }}>
        <Button variant={"contained"} color={"secondary"} onClick={() => handleSendMailButton(true)} fullWidth>
          Send Mail
        </Button>
      </Grid>
      <AnnouncementDialog isOpenAnnouncementDialog={isOpenAnnouncementDialog} setOpenAnnouncementDialog={setOpenAnnouncementDialog} />
      <MailDialog isOpenSendMailDialog={isOpenSendMailDialog} setOpenSendMailDialog={setOpenSendMailDialog} />
    </Grid>
  );
}

export default StudentFilters;