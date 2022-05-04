import Head from "next/head";
import EventsList from "../components/events/EventsList";
import { getAllData, getFeaturedEvents } from "../helpers/api_util";
//import { getFeaturedEvents2 } from "./mockData";

export default function HomePage({ events }) {
  return (
    <div>
      <Head>
        <title>NextJS App</title>
        <meta
          name="description"
          content="All events  we  can  see  here as a featured events"
        />
      </Head>
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
