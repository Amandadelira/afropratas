import "../layout/Container.css"

function Container (props) {
    return <div className="containero">
        
        <div className="figure">
        
            <span>
                <label className="title">Bem Vindo a Afropratas!</label>
            <p className="subtext">A maior Distribuidora de pratas do litoral Norte</p>
            </span>
        </div>
       
        {props.children}
    </div>
}
export default Container