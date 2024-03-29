import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/actors`)
    .then(r=>r.json())
    .then(data=>{
      setActors(data)
    })
  },[])
  console.log(actors)
//   0
// : 
// id
// : 
// "1"
// movies
// : 
// (3) ['Doctor Strange', 'The Imitation Game', 'Black Mass']
// name
// : 
// "Benedict Cumberbatch"
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map(act => {
          return <article>
            <h1>{act.name}</h1>
            <ul>
              {act.movies.map(movie => {
                return <li>{movie}</li>
              })}
            </ul>
          </article>
        })}
      </main>
    </>
  );
};

export default Actors;
