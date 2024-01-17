import { Link, useRouteLoaderData, json } from "react-router-dom";

import EventItem from '../components/EventItem.js';

function EditDetailPage() {
  const data = useRouteLoaderData('detalle-evento');
  const evento = data.event;

  return (
    <>
      <EventItem event={evento}/>
      <p>
        <Link to=".." relative="path">
          Regresar
        </Link>
      </p>
    </>
  );
}

export default EditDetailPage;

export async function loader({request, params}) {
  const id = params.id;

  const response = await fetch('http://localhost:8080/events/' + id);

  if(!response.ok){
    throw json({message: 'Could not fetch details for selected event.'}, {
      status: 500
    })
  } else {
    return response;
  }
}