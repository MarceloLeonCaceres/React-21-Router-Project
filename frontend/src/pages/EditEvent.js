import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm.js';

function EditEventPage(){
    const data = useRouteLoaderData('detalle-evento');

    return (
        <EventForm event={data.event}/>
    );
}

export default EditEventPage;