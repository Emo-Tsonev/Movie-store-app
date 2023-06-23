import MainPage from "../components/MainPage"
import MoviePage from "../components/MoviePage"

const routes = {
    movies: {path: '/movies', name: 'Movies' ,includedInNav: true, element: <MainPage />},
    movieById: {path: 'movies/:movieId', name: '' , includedInNav: false, element: <MoviePage />}
}

export default routes
