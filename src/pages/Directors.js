import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";


function Directors() {
const [directors, setDirectors] = useState([])
const params = useParams()
const directorId = params.id


  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error))
  }, [directorId])

  const directorInfo = directors.map(director => {
    return <DirectorCard key={director.id} director={director} name={director.name} 
    movies={director.movies}/>
  })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
          <article>
            
            {directorInfo}
            
         </article>
      </main>
    </>
  );
};

export default Directors;
