import { Link } from "react-router-dom"


const MovieItem = (props) => {

    const { movie } = props

    return <div>
        <Link to={`${movie.id}`}>{movie.title}</Link>
    </div>
}

export default MovieItem
