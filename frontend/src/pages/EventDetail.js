import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem.js";
import EventsList from "../components/EventsList.js";
import { Suspense } from "react";

function EditDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EditDetailPage;

async function loadEvent(id) {
  const url = "http://localhost:8080/events/" + id;
  console.log('...en loadEvent, con la url: ' + url);
  const response = await fetch(url);
  console.log('...pasé await fetch(url) ');
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event. en loadEvent: " + id },
      {
        status: 500,
      }
    );
  } else {
    console.log('...saliendo de loadEvent');
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ params }) {
  const id = params.eventId;
  console.log('estoy en loader de EventDetail.js, con id = ' + id);
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    console.log("Could not delete event." + id);
    throw json(
      { message: "Could not delete event." + id },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
