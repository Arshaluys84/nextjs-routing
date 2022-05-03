import EventsList from "../components/events/EventsList";
import { getAllData, getFeaturedEvents } from "../helpers/api_util";
//import { getFeaturedEvents2 } from "./mockData";

export default function HomePage({ events }) {
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
    revalidate: 6000,
  };
}
