import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function DirectorContainer() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Directors Directory</h1>
      <Outlet context={{ directors, setDirectors, loading }} />
    </div>
  );
}

export default DirectorContainer;