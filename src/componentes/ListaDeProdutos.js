import { useEffect, useState } from "react";
import { Card, Row,Col} from "react-bootstrap";
import desejo from "../assets/img/desejo.svg";
import './ListaDeProduto.css';

const ListaDeProdutos = () => {
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
      </div>
      <div class="listadeprodutos">
        {products &&
          products.map((product) => {
            return (
                  <Card class="card">
                    <Card.Img variant="top" src={product.photo} alt={product.title} className="cardis" />
                    <Card.Body className="textinho">
                      <div class="texto">
                          <Card.Title><h1>{product.title}</h1></Card.Title>
                          <img src={desejo} className="coracao" alt="icone" />
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
export default ListaDeProdutos