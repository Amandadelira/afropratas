import { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import { Link } from 'react-router-dom'
import './ListaDeProdutos';
import {FcAddImage, FcEditImage, FcFullTrash} from 'react-icons/fc'

import "./ListaAdmin.css"
const ListaAdmin = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost/afropratas-back-end/api/product/select-all")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

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
                  <Card className="card" key={product.id}>
                    <Card.Img variant="top" src={product.photo} alt={product.title} className="cardis" />
                    <Card.Body className="textinho">
                      <div className="texto">
                          <Card.Title><h1>{product.title}</h1></Card.Title>
                          <div className="iconsad">
                            <FcFullTrash className="lixeirinha" />
                            <Link to="/admin/edita/:">
                              <FcEditImage className="editinho" />
                            </Link>
                          </div>
                      </div>
                      <p>{product.price}</p>
                    </Card.Body>
                  </Card>                              
            )
          })
        }
      </div>
    </>
  )
}
export default ListaAdmin