import "../layout/Container.css"
import { Link } from 'react-router-dom'
import entrada from '../../assets/img/entrada.jpg'

function Container (props) {
    return <div className="container">
        {props.children}
        <div className="figure">
        <Link to="/">
            <img src={entrada} className="entrada" alt="fotoprincipal" height="820" />
            <label className="titulo">Bem Vindo a Afropratas!</label>
        </Link>
        </div>
        <div className="coluna_p">
            <div className="col-12 ">
                <span>Produtos</span>
            </div>
        </div>
    </div>
}
export default Container