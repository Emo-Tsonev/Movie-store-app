import { useEffect, useState } from "react"
import apiMovies from "../api/movies"
import MovieItem from "./MovieItem"

const MainPage = () => {
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        apiMovies.getAll()
        .then((data) => {

            setMovies(data)
        })
    } , [])

    return <div>
       <h1>Main page</h1>
        <div>
            {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}    
        </div>
    </div>

}

export default MainPage
