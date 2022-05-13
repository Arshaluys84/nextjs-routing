import { getEventById, getFeaturedEvents } from "../../helpers/api_util";
import Head from "next/head";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import ErrorAlert from "../../components/UI/ErrorAlert/ErrorAlert";
import Comments from "../../components/input/Comments";

const EventDetailPage = ({ event }) => {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(+eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>Event not found</p>
        </ErrorAlert>
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>{event.description}</EventContent>
      <Comments eventId={event.id} />
    </div>
  );
};
export async function getStaticProps(context) {
  const { params } = context;
  const event = await getEventById(params.eventId);
  if (!event) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      event: event,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const filePaths = events.map((p) => {
    return {
      params: {
        eventId: p.id,
      },
    };
  });
  return {
    paths: filePaths,
    // [{ params: { eventId: "1" } }],
    fallback: "blocking",
  };
}

export default EventDetailPage;
