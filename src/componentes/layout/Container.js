import "../layout/Container.css"

function Container (props) {
    return <div className="conatiner">
        {props.children}

    </div>
    
}
export default Container