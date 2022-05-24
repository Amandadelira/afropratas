import "../layout/Container.css"

function Container (props) {
    return <div className="container">
        {props.children}
        <div className="figure">
        
            <span>
                <label className="title">Bem Vindo a Afropratas!</label>
            <p className="subtext">A maior Distribuidora de pratas do litoral Norte</p>
            </span>
        </div>
        <div className="coluna_p">
            <div className="col-12 ">
                <span>Produtos</span>
            </div>
        </div>
    </div>
}
export default Container