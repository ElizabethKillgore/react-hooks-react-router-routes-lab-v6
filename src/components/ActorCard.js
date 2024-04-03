import {Link} from 'react-router-dom'

function ActorCard({actor}) {

    return (
        <article>
          <Link to={`/actors/${actor.id}`}></Link>
          <h1>{actor.name}</h1>
          <ul>{actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
    )
}


export default ActorCard