import { useRef, useEffect} from 'react'
import "./CadastraProduto.css"

const CadastraProduto = ({CadastroProduct, setCadastroProdutc}) => {

  const titleRef = useRef();
  const photoRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    titleRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    console.log('cheguei aqui')
    event.preventDefault()
    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('photo', photoRef.current.value);
    formData.append('price', priceRef.current.value);
    
    fetch("http://localhost/afropratas-back-end/api/product/create", {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        titleRef.current.value = ''
        photoRef.current.value = ''
        priceRef.current.value = ''
        titleRef.current.focus()
          // setCadastroProdutc([data.CadastroProduct ,...CadastroProduct])
      });
  } 

  return (
    <div className="fundo6">
      <div className="geral6">
      <h1>Cadastrar Produto</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <label>Titulo:</label><input className="retangulo6" ref={titleRef} type="text" name="title" placeholder="Informe um Titulo para seu Produto"/>
          <label>Imagem:</label><input className="retangulo6" ref={photoRef} type="text" name="photo" placeholder="Adicone a url de sua imagem"/>
          <label>Preço:</label><input className="preço"ref={priceRef} type="text" name="price" placeholder="Informe um valor "/>
          <input className="button6" type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  )
}

export default CadastraProduto