import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if(data.isError){
  //   return <p>{data.message}</p>
  // }
  const eventos = data.events;

  return <EventsList events={eventos} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsssss");

  if (!response.ok) {
    // return { isError: true, message: 'No pudo traer los eventos.'};
    throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {
      status: 500,
    });
  } else {
    return response;
  }
}