import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function MovieForm() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [genres, setGenres] = useState("");
  const { director, directors, setDirectors } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      time: Number(time),
      genres: genres
        .split(",")
        .map((genre) => genre.trim())
        .filter(Boolean),
    };
    const updatedDirector = {
      ...director,
      movies: [...(director.movies || []), newMovie],
    };

    fetch(`http://localhost:3001/directors/${director.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movies: updatedDirector.movies }),
    })
      .then((res) => res.json())
      .then((savedDirector) => {
        setDirectors(
          directors.map((d) => (d.id === savedDirector.id ? savedDirector : d))
        );
        navigate(`/directors/${director.id}/movies/${newMovie.id}`);
      });
  }

  return (
    <>
    <h2>Add New Movie</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genres"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
    </>
  );
}

export default MovieForm;
