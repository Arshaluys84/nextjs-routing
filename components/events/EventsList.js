import EventItem from "./EventItem";

import styles from "./EventsList.module.css";

const EventsList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((ev) => (
        <EventItem key={ev.id} evt={ev} />
      ))}
    </ul>
  );
};

export default EventsList;
