import { useRouter } from "next/router";
import { getAllEvents } from "../mockData";

import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllData, getFeaturedEvents } from "../../helpers/api_util";

const AllEventsPage = ({ allEvents }) => {
  const router = useRouter();
  // const events = getAllEvents();

  const onSearchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={onSearchHandler} />
      <EventsList events={allEvents} />
    </div>
  );
};
export async function getStaticProps() {
  const events = await getAllData();
  return {
    props: {
      allEvents: events,
    },
    revalidate: 1,
  };
}
export default AllEventsPage;
