import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const eventos = useLoaderData();
  return <EventsList events={eventos} />;
}

export default EventsPage;
