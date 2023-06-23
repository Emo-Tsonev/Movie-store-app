import { Link } from "react-router-dom"
import routes from "../../utils/constants"


const Navigation = () => {


    return <div>
        <nav>
            {Object.values(routes)
            .filter((route) => route.includedInNav)
            .map((route) => <li key={route.path}>
                <Link to={route.path}>{route.name}</Link></li>)}
        </nav>
    </div>
}

export default Navigation
