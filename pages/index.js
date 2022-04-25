import EventsList from "../components/events/EventsList";
import { getFeaturedEvents } from "./mockData";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
}
