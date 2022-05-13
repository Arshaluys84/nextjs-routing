import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllData, getFeaturedEvents } from "../../helpers/api_util";
import NewsletterRegistration from "../../components/input/NewsletterRegistration";

const AllEventsPage = ({ allEvents }) => {
  const router = useRouter();
  // const events = getAllEvents();

  const onSearchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="All events  we  can  see  here as a featured events"
        />
      </Head>
      <NewsletterRegistration />
      <EventsSearch onSearch={onSearchHandler} />
      <EventsList events={allEvents} />
      <div>
        <Link href="/Feedback">Feedback</Link>
      </div>
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
