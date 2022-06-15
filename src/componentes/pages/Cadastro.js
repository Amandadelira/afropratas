import {useRef, useEffect} from 'react'
import "./Cadastro.css";
const FormCadastro = ({Cadastro, setCadastro}) => {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    nameRef.current.focus()
  },[])


    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append('name',  nameRef.current.value);
      formData.append('lastName',lastNameRef.current.value);
      formData.append('email',  emailRef.current.value);
      formData.append('cpf', cpfRef.current.value);
      formData.append('password',passwordRef.current.value);
      fetch(
        "http://localhost/afropratas-back-end/api/user/create",
        {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
        nameRef.current.value = ''
        lastNameRef.current.value = ''
        emailRef.current.value = ''
        cpfRef.current.value = ''
        passwordRef.current.value = ''
        nameRef.current.focus()
          setCadastro([data.cadastro ,...Cadastro])
        });
    }

    return(
    <div className="fundo3">
        <div className="geral1">
            <form onSubmit={(event) => handleSubmit(event)}>
                <label className="titulof">Nome:</label><input className="retangulo1" ref={nameRef} type="text" name="name" placeholder="Digite seu nome"/>
                <label className="titulof">Sobrenome:</label><input className="retangulo1"ref={lastNameRef} type="lastName" name="LastName" placeholder="Digite seu sobrenome"/>
                <label className="titulof">Email:</label><input className="retangulo1" ref={emailRef} type="email" name="email" placeholder="Informe um email"/>
                <label className="titulof">CPF:</label><input className="retangulo1"ref={cpfRef} type="cpf" name="cpf" placeholder="Digite um cpf valido"/>
                <label className="titulof">Senha:</label><input className="retangulo1" ref={passwordRef} type="password" name="pass"placeholder='Crie uma senha'/>
                <input className="button1" type="submit" value="Cadastrar-me"/>
            </form>
        </div>
    </div>
    )
}

export default FormCadastro