import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {
  const [actors, setActors] = useState([])
  const params = useParams
  const actorId = params.id

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error))
  }, [actorId])
  // console.log(actors)

  // if(!actors.name){
  //   return <h1>Loading...</h1>
  // }

  const actorInfo = actors.map(actor => {
    return <ActorCard key={actor.id} actor={actor} name={actor.name} movies={actor.movies}/>
  }) 

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <article>
          {actorInfo}
        
        </article>
        
      </main>
    </>
  );
};

export default Actors;
