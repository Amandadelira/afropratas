import { useEffect, useState } from "react";
import { Card, Row,Col, CardGroup } from "react-bootstrap";
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
        {products &&
          products.map((product) => {
            return (
              <>
              <Row className="col">
                <div class="col">
                  <CardGroup >
                    <Card>
                    <img src={desejo} className="coração" alt="icone" />
                      <Card.Img variant="top" src={product.photo} alt={product.title} className="cardis" />
                      <Card.Body className="textinho">
                        <Card.Title><h1>{product.title}</h1></Card.Title>
                        <Card.Text className="titulis">
                          <p>{product.price}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>                
                  </CardGroup>                
                </div>
              </Row>

              </>
            )
          })
        }
    </>
  )
}
export default ListaDeProdutos