import "../layout/Container.css"
import { Link } from 'react-router-dom'
import entrada from '../../assets/img/entrada.jpg'

function Container (props) {
    return <div className="container">
        {props.children}
    <Link to="/">
        <img src={entrada} className="entrada" alt="fotoprincipal" />
    </Link>

    </div>
}
export default Container