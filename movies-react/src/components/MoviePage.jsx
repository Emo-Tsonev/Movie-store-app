import { useEffect, useState } from "react"
import apiMovies from "../api/movies"
import { useParams } from "react-router"

const MoviePage = () => {

    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        setIsLoading(true)
        apiMovies.getById(params.movieId)
        .then((data) => setMovie(data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }, [params.movieId])

    if(isLoading || !movie) {
        return <div>
            <p>Loading...</p>
        </div>
    }

    return <div>
        <h1>{movie.title}</h1>
    </div>
}

export default MoviePage
