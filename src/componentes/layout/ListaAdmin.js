import { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import { Link } from 'react-router-dom'
import desejo from "../../assets/img/desejo.svg";
import './ListaDeProdutos';
import {IoIosCreate} from 'react-icons/io'
import {MdDelete} from 'react-icons/md'

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
                <Link to="/CadastraProduto">
                <IoIosCreate />Cadastrar Produto</Link>
            </li>
        </ul>   

      </div>
      <div className="listadeprodutos">
        {products &&
          products.map((product) => {
            return (
                  <Card className="card">
                    <Card.Img variant="top" src={product.photo} alt={product.title} className="cardis" />
                    <Card.Body className="textinho">
                      <div className="texto">
                          <Card.Title><h1>{product.title}</h1></Card.Title>
                          <MdDelete className="lixeirinha" />
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