import { useRouter } from "next/router";

import { getFilteredEvents } from "../mockData";
import EventsList from "../../components/events/EventsList";
import ResultsTitle from "../../components/events/ResultsTitle";
import ErrorAlert from "../../components/UI/ErrorAlert/ErrorAlert";

const EventsSlugPage = () => {
  const router = useRouter();
  const url = router.query.slug;

  if (!url) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Loading....</p>;
        </ErrorAlert>
      </>
    );
  }
  if (
    isNaN(url[0]) ||
    isNaN(url[1]) ||
    url[0] > 2030 ||
    url[0] < 2021 ||
    url[1] > 12 ||
    url[1] < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid url . Please check it .</p>;
        </ErrorAlert>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: +url[0] || 2021,
    month: +url[1],
  });
  if (!filteredEvents || !filteredEvents.length) {
    return (
      <>
        <ErrorAlert>
          <p className="center">There is no any event</p>
        </ErrorAlert>
      </>
    );
  } else {
    const date = new Date(url[0], url[1] - 1);
    return (
      <div>
        <ResultsTitle date={date} />
        <EventsList events={filteredEvents} />
      </div>
    );
  }
};

export default EventsSlugPage;
