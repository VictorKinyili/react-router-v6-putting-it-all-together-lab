import { useParams, useOutletContext, Outlet, Link } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const { directors, setDirectors } = useOutletContext();

  const director = directors.find((d) => String(d.id) === id);

  if (!director) return <p>Loading director...</p>;

  return (
    <div>
      <h2>{director.name}</h2>
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