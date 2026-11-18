import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext();

  const movie = director?.movies?.find((m) => String(m.id) === movieId);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
    </div>
  );
}

export default MovieCard;