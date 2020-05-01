import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button } from "@material-ui/core";

const AnnouncementDialog = props => {
  const { isOpenAnnouncementDialog, setOpenAnnouncementDialog } = props;
  const [ announcementHeading, setAnnouncementHeading ] = useState("");
  const [ announcementDescription, setAnnouncementDescription ] = useState("");
  const handleClose = () => {
    setOpenAnnouncementDialog(false);
    setAnnouncementHeading("");
    setAnnouncementDescription("");
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
        <Button onClick={handleClose} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AnnouncementDialog;