import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/directors`)
    .then(r=>r.json())
    .then(data=>{
      setDirectors(data)
    })
  },[])
  console.log(directors)
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map(dir => {
          return <article>
            <h1>{dir.name}</h1>
            <ul>
              {dir.movies.map(movie => {
                return <li>{movie}</li>
              })}
            </ul>
          </article>
        })}
      </main>
    </>
  );
};

export default Directors;
