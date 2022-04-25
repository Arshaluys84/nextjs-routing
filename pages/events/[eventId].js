import { useRouter } from "next/router";
import { getEventById } from "../mockData";

import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import ErrorAlert from "../../components/UI/ErrorAlert/ErrorAlert";
const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(+eventId);

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
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>{event.description}</EventContent>
    </div>
  );
};

export default EventDetailPage;
