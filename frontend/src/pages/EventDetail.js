import { useParams, Link } from "react-router-dom";

function EditDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Edit Detail Page</h1>
      <h3>Event id: {params.id}</h3>
      <h3>{params.title}</h3>
      <p>{params.description}</p>
      <p>
        <Link to=".." relative="path">
          Regresar
        </Link>
      </p>
    </>
  );
}

export default EditDetailPage;
