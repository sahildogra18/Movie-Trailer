import { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

function App() {
  const [movieName, setMovieName] = useState("ms dhoni the untold story");
  let [movieUrl, setMovieUrl] = useState(null);
  let [error, setError] = useState(null);

  function clickKaro() {
    setError(null);
    movieTrailer(movieName).then((res) => {
      if (res) {
        setMovieUrl(res);
      } else {
        setError(
          "this movie trailer has been not found by us click here for more"
        );
      }
    });
  }
  function change(e) {
    setMovieName(e.target.value);
  }

  return (
    <>
      <h1>Search for any movies and show</h1>
      <input
        type="text"
        placeholder="searach here"
        value={movieName}
        onChange={change}
      />
      <button onClick={clickKaro}>Here we go</button>
      {error && <h2>{<h1>{error}</h1>}</h2>}

      {movieUrl && !error && <ReactPlayer url={movieUrl} controls={true} />}
    </>
  );
}

export default App;
