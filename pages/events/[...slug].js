import { getFilteredEvents } from "../../helpers/api_util";
import EventsList from "../../components/events/EventsList";
import ResultsTitle from "../../components/events/ResultsTitle";
import ErrorAlert from "../../components/UI/ErrorAlert/ErrorAlert";
import Button from "../../components/UI/button/Button";

const EventsSlugPage = ({ hasError, filteredEvents, dateFilter }) => {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid url . Please check it .</p>;
        </ErrorAlert>
      </>
    );
  }

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <>
        <ErrorAlert>
          <p className="center">There is no any event</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </>
    );
  } else {
    const date = new Date(dateFilter.year, dateFilter.month - 1);
    return (
      <div>
        <ResultsTitle date={date} />
        <EventsList events={filteredEvents} />
      </div>
    );
  }
};
export async function getServerSideProps(context) {
  const { params } = context;
  const url = params.slug;
  if (!url) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  if (
    isNaN(url[0]) ||
    isNaN(url[1]) ||
    url[0] > 2030 ||
    url[0] < 2021 ||
    url[1] > 12 ||
    url[1] < 1
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: +url[0] || 2021,
    month: +url[1],
  });
  return {
    props: {
      filteredEvents: filteredEvents,
      dateFilter: {
        year: +url[0],
        month: +url[1],
      },
    },
  };
}
export default EventsSlugPage;
