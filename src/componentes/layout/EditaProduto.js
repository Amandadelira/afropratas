import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./EditaProduto.css"
const EditaProduto = () => {

    const { ProductId } = useParams()
    const [Product, setProduct] = useState()
    const navigate = useNavigate()

    // const clearProductValue = {
    //     name: '',
    //     email: '',
    //     pass: ''
    // }

    useEffect(() => {
        fetch(`http://localhost/afropratas-back-end/api/product/select-by-id/?id=${ProductId}`)
            .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => setProduct(data))
            .catch((error) => {
                console.log(error);
            })
    }, [ProductId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', ProductId)
        formData.append('title', event.target[0].value)
        formData.append('photo', event.target[1].value)
        formData.append('price', event.target[2].value)
        fetch(
            "http://localhost/afropratas-back-end/api/Product/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.Product?.id){
                    navigate('../');
                    //setProduct(clearProductValue)
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    }
    
    const handleChange = (event) => {
        const {title, value} = event.target
        setProduct({...Product, [title]: value})
    } 
  
    return (
        <>
        {Product ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" value={Product.title} onChange={handleChange} />
                <label>Email:</label><input type="email" name="email"  value={Product.photo} onChange={handleChange} />
                <label>Senha:</label><input type="password" name="pass"  value={Product.price} onChange={handleChange} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditaProduto