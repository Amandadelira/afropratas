import { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import { Link } from 'react-router-dom'
import './ListaDeProdutos';
import {FcAddImage, FcEditImage, FcFullTrash} from 'react-icons/fc'
import { useAuth } from '../../provides/authProvider';

import "./ListaAdmin.css"
import DeletaProduto from "../pages/DeletaProduto";
const ListaAdmin = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [products, setProducts] = useState(null);
  const { userLogged } = useAuth();

  useEffect(() => {
    fetch("http://localhost/afropratas-back-end/api/product/select-all")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleTrashClick = () => {
    const formData = new FormData();
    formData.append('id', deleteId);
    const urlDelete = "http://localhost/afropratas-back-end/api/product/delete";
    fetch(urlDelete, {
      method: 'POST',
      body: formData,
      headers: {
          "Access-Token": userLogged.token
        }
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message)
        const productsFiltered = products.filter((product) => { return product.id !== deleteId });
        setProducts(productsFiltered)
        setDeleteId(null);
      });
  }

  return (
    <>
      <div className="cards">
        <div className="coluna_p">
          <div className="col-12 ">
            <span>Produtos</span>
          </div>
        </div>
        <ul className="barra_create">
            <li className="social_create">
                <Link to="/admin/cadastra-produto">
                <FcAddImage />Cadastrar Produto</Link>
            </li>
        </ul>   

      </div>
      <div className="listadeprodutos">
        {products &&
          products.map((product) => {
            return (
                  <div className="cardu" key={product.id}>
                    <Card.Img variant="top" src={product.photo} alt={product.title} className="cardis" />
                    <Card.Body className="textinho">
                      <div className="texto">
                          <Card.Title><h1>{product.title}</h1></Card.Title>
                          <div className="iconsad">
                            <a onClick={() => setDeleteId(product.id)}>
                              <FcFullTrash className="lixeirinha" />
                            </a>
                            <Link to={"/admin/edita/" + product.id}>
                              <FcEditImage className="editinho" />
                            </Link>
                          </div>
                      </div>
                      <p>{product.price}</p>
                    </Card.Body>
                  </div>                              
            )
          })
        }
      </div>
      <DeletaProduto id={deleteId} fechar={() => setDeleteId(null)} deletar={() => handleTrashClick()} />
    </>
  )
}
export default ListaAdmin