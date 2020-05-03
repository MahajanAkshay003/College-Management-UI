import React from 'react';
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

const Notification = props => {
  const { isNotificationOpen, setNotificationOpen, notificationMessage, notificationType } = props;
  const handleClose = () => setNotificationOpen(false);
  return (
    <Snackbar open={isNotificationOpen} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={notificationType}>
        {notificationMessage}
      </MuiAlert>
    </Snackbar>
  );
}

export default Notification;