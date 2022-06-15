import { useRef, useEffect } from "react";
import { useAuth } from "../../provides/authProvider";
import "./Login.css";
const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();

    const { setIsLogged, setUserLogged, isLogged } = useAuth();

    useEffect(() => {
        emailRef.current.focus()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('email', event.target[0].value);
        formData.append('pass', event.target[1].value);
        fetch(
          "http://localhost/afropratas-back-end/api/auth/login",
          {method: 'POST', body: formData}
        )
          .then(async (response) => {
                if(response.status === 200){
                    let data = await response.json()
                    setIsLogged(true)
                    setUserLogged(data.session)
                    localStorage.setItem('userLogged', JSON.stringify(data.session));
                } else {
                    let data = await response.json()
                    data?.message
                        ? alert(data.message)
                        : alert('Erro ao Logar!')
                }
            })
    } 

    return (
        
        <div className="fundo4">
            <div className="geral4">
                <div className="form4">
                    <form onSubmit={(event) => handleSubmit(event)}>
                    <label>Email:</label><input className="retangulo4" ref={emailRef} type="email" name="email" placeholder="Informe seu email"/>
                    <label>Senha:</label><input className="retangulo4" ref={passRef} type="password" name="pass" placeholder="Digite sua senha"/>
                    <input className="button4"type="submit" value="Logar" />
                    </form>
                </div>
            { isLogged
                ? (<span>Opa, logado!!</span>)
                : (<span>Ops! ainda não...</span>)
            }
            <br />
            </div>
        </div>
        
    )
}

export default Login