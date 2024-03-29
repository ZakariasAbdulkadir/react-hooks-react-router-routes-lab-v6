import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from '../components/MovieCard'
import { Link } from "react-router-dom";


function Home() {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/movies')
    .then(r=>r.json())
    .then(data=>{
      setMovies(data)
    })
  },[movies])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map(movie => {
          return (
          <Link to={`/movie/${movie.id}`}>
            <MovieCard key= {movie.id} title={movie.title} movie={movie} />
          </Link>
          )
        })}

      </main>
    </>
  );
};

export default Home;
