import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function DirectorContainer() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <div>
      <h1>Directors Directory</h1>
      <Outlet context={{ directors, setDirectors }} />
    </div>
  );
}

export default DirectorContainer;