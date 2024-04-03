import {Link} from 'react-router-dom';

function DirectorCard({director}) {
    
    return (
        <article>
        <Link to={`/directors/${director.id}`}></Link>
            <h2>{director.name}</h2>
            <ul>
                {director.movies.map((movie) => (
                   <li key={movie}>{movie}</li>
                ))}
            </ul>
            
                
            
        </article>
    )
}

export default DirectorCard