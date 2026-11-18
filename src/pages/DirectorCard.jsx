import { useParams, useOutletContext, Outlet, Link } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const { directors, setDirectors, loading } = useOutletContext();

  const director = directors.find((d) => String(d.id) === id);

  if (loading) return <p>Loading director...</p>;
  if (!director) return <p>Director not found.</p>;

  return (
    <div>
      <h2>{director.name}</h2>
      {director.bio && <p>{director.bio}</p>}
      <Link to={`/directors/${director.id}/movies/new`}>Add New Movie</Link>
      <ul>
        {director.movies?.map((movie) => (
          <li key={movie.id}>
            <Link to={`/directors/${director.id}/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet context={{ director, directors, setDirectors }} />
    </div>
  );
}

export default DirectorCard;