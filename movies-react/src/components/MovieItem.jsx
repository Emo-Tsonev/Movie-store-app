import { Link } from "react-router-dom"
import styles from './MovieItem.module.css'

const MovieItem = (props) => {

    const { movie } = props

    return <div className={styles.wrapper}>
        <Link to={`${movie.id}`}>{movie.title}</Link>
        <div><img className={styles.poster} src={movie.posterUrl} alt="poster" /></div>
        <div><p>{movie.description}</p></div>
        
    </div>
}

export default MovieItem
