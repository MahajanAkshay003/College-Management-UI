import React, { useState } from 'react';

const NotificationCustomHook = () => {
  const [ isNotificationOpen, setNotificationOpen ] = useState(false);
  const [ notificationMessage, setNotificationMessage ] = useState("");
  const [ notificationType, setNotificationType ] = useState("success");
  const setNotificationTypeAndMessage = (type, message) => {
    setNotificationType(type);
    setNotificationMessage(message);
    setNotificationOpen(true);
  }
  return [
    isNotificationOpen, setNotificationOpen, notificationMessage, notificationType, setNotificationTypeAndMessage
  ];
}

export default NotificationCustomHook;