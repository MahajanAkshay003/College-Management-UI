import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@material-ui/core";
import {sendMailToStudent} from "../../../../../remoteMethods/Announcement/announcement";

const MailDialog = props => {
  const { isOpenSendMailDialog, setOpenSendMailDialog, selectedStudents } = props;
  const [ mailSubject, setMailSubject ] = useState("");
  const [ mailBody, setMailBody ] = useState("");
  const handleClose = () => {
    setOpenSendMailDialog(false);
    setMailSubject("");
    setMailBody("");
  }
  const sendMailButtonHandler = () => {
    Promise.all(selectedStudents.map(studentId => sendMailToStudent(
      studentId, mailSubject, mailBody
    )))
      .then(result => handleClose())
      .catch(error => handleClose());
  }
  return (
    <Dialog open={isOpenSendMailDialog} onClose={handleClose}>
      <DialogTitle>Send Mail</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          value={mailSubject}
          onChange={event => setMailSubject(event.target.value)}
          margin="dense"
          variant={"outlined"}
          label="Mail Subject"
          fullWidth
        />
        <TextField
          value={mailBody}
          onChange={event => setMailBody(event.target.value)}
          margin="dense"
          variant={"outlined"}
          rows={4}
          label="Mail Body"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={sendMailButtonHandler} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MailDialog;