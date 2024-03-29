import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState([])
  let {id} = useParams()

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${id}`)
    .then(r=>r.json())
    .then(data=>{
      setMovie(data)
    })
  },[])
  console.log(movie)
  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {/* {movie.genres.map(genre=>{
          return <span>{genre}</span>
        })} */}
      </main>
    </>
  );
};

export default Movie;
