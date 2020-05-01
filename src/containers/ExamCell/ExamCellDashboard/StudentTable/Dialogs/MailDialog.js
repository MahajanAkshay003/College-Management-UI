import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@material-ui/core";

const MailDialog = props => {
  const { isOpenSendMailDialog, setOpenSendMailDialog } = props;
  const [ mailSubject, setMailSubject ] = useState("");
  const [ mailBody, setMailBody ] = useState("");
  const handleClose = () => {
    setOpenSendMailDialog(false);
    setMailSubject("");
    setMailBody("");
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
        <Button onClick={handleClose} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MailDialog;