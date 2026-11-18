import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DirectorContainer from "./components/DirectorContainer";
import DirectorList from "./components/DirectorList";
import DirectorForm from "./components/DirectorForm";
import DirectorCard from "./components/DirectorCard";
import MovieForm from "./components/MovieForm";
import MovieCard from "./components/MovieCard";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorList />} />
          <Route path="new" element={<DirectorForm />} />
          <Route path=":id" element={<DirectorCard />}>
            <Route path="movies/new" element={<MovieForm />} />
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
