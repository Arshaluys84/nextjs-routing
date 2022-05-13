import React, { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotificaton: (notification) => {},
  hideNotificaton: () => {},
});

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState();

  const showNotificatonHandler = (notification) => {
    setActiveNotification(notification);
  };
  const hideNotificatonHandler = () => {
    setActiveNotification(null);
  };
  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      let timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);
  const context = {
    notification: activeNotification,
    showNotificaton: showNotificatonHandler,
    hideNotificaton: hideNotificatonHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
