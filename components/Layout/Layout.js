import { useContext } from "react";
import NotificationContext from "../../store/notificationContext";
import Notification from "../UI/notification/notification";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  const NotificationCtx = useContext(NotificationContext);

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {NotificationCtx.notification && (
        <Notification
          title={NotificationCtx.notification.title}
          message={NotificationCtx.notification.message}
          status={NotificationCtx.notification.status}
        />
      )}
    </>
  );
};

export default Layout;
