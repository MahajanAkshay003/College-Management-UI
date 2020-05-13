import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import {sendAnnouncement} from "../../../../../remoteMethods/Announcement/announcement";

const AnnouncementDialog = props => {
  const { isOpenAnnouncementDialog, setOpenAnnouncementDialog, selectedStudents, user } = props;
  const [ announcementHeading, setAnnouncementHeading ] = useState("");
  const [ announcementDescription, setAnnouncementDescription ] = useState("");
  const handleClose = () => {
    setOpenAnnouncementDialog(false);
    setAnnouncementHeading("");
    setAnnouncementDescription("");
  }
  const sendAnnouncementButtonHandler = () => {
    Promise.all(selectedStudents.map(studentId => sendAnnouncement(
      announcementHeading, announcementDescription, studentId,
      user.userId, user.userType
    ))).then(() => {
      handleClose();
    }).catch(error => {
      console.log(error);
      handleClose();
    })
  }
  return (
    <Dialog open={isOpenAnnouncementDialog} onClose={handleClose}>
      <DialogTitle>Send Announcement</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          value={announcementHeading}
          onChange={event => setAnnouncementHeading(event.target.value)}
          margin="dense"
          variant={"outlined"}
          label="Announcement Heading"
          fullWidth
        />
        <TextField
          value={announcementDescription}
          onChange={event => setAnnouncementDescription(event.target.value)}
          margin="dense"
          variant={"outlined"}
          rows={4}
          label="Announcement Description"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={sendAnnouncementButtonHandler} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(AnnouncementDialog);