import EventsList from "../components/events/EventsList";
import { getFeaturedEvents } from "./helpers/api_util";
import { getFeaturedEvents2 } from "./mockData";

export default function HomePage({ events }) {
  console.log(events);
  // const featuredEvents = getFeaturedEvents2();

  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
