import { useRouter } from "next/router";
import { getAllEvents } from "../mockData";

import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const onSearchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={onSearchHandler} />
      <EventsList events={events} />
    </div>
  );
};

export default AllEventsPage;
