import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState("");
  const { directors, setDirectors } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/directors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, movies: [] }),
    })
      .then((res) => res.json())
      .then((newDirector) => {
        setDirectors([...directors, newDirector]);
        navigate(`/directors/${newDirector.id}`);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Director Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Director</button>
    </form>
  );
}

export default DirectorForm;
