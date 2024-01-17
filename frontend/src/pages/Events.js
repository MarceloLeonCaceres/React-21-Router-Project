import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Evento 1",
    description: "Detalles del evento 1",
  },
  {
    id: "e2",
    title: "Evento 2",
    description: "Detalles del evento 2",
  },
  {
    id: "e3",
    title: "Evento 3",
    description: "Detalles del evento 3",
  },
];

function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((evento) => (
          <li key={evento.id}>
            <Link to={evento.id}>{evento.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
