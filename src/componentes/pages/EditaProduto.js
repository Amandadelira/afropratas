import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./EditaProduto.css"
import { useAuth } from '../../provides/authProvider';

const EditaProduto = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState()
    const navigate = useNavigate()
    const { userLogged } = useAuth();


    // const clearProductValue = {
    //     name: '',
    //     email: '',
    //     pass: ''
    // }

    useEffect(() => {
        fetch("http://localhost/afropratas-back-end/api/product/select-by-id/?id="+productId)
            .then((response) => response.json())
            .then((data) =>{ 
                setProduct(data.produto);
            });
    }, [productId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', productId)
        formData.append('title', event.target[0].value)
        formData.append('photo', event.target[1].value)
        formData.append('price', event.target[2].value)
        fetch(
            "http://localhost/afropratas-back-end/api/product/update",
            {
                method: 'POST', 
                body: formData,
                headers: {
                    "Access-Token": userLogged.token
                  }
            }
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.product?.id){
                    navigate('../');
                    // setProduct(clearProductValue)
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data.produto)
                }
            })
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setProduct({...product, [name]: value})
    } 
  
    return (
        <>
        {product ? (
            <div className="fundo6">
                <div className="geral6">
                <h1>Editar Produto</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label>Titulo:</label><input className="retangulo6" value={product.title} type="text" name="title"  onChange={handleChange}/>
                    <label>Imagem:</label><input className="retangulo6" value={product.photo} type="text" name="photo" onChange={handleChange} />
                    <label>Preço:</label><input className="preço" value={product.price} type="text" name="price" onChange={handleChange}/>
                    <input className="button6" type="submit" value="Editar" />
                </form>
                </div>
            </div>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditaProduto