import { useEffect, useState } from "react";
import { Card, Row,Col, CardGroup } from "react-bootstrap";
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
              <Row>
                <Col className="car" xs={12} lg={4}>
                  <CardGroup >
                    <Card>
                      <Card.Img variant="top" src={product.photo} alt={product.title} className="cardis" />
                      <Card.Body>
                        <Card.Title><h1>{product.title}</h1></Card.Title>
                        <Card.Text className="titulis">
                          <p>{product.price}</p>
                          Arcão para as mulheres
                          <br/>
                          ficaremn belas e charmosas
                          <br/>
                          para a revoada!!!!
                          <br/>
                          Bololo bora lá!!!
                        </Card.Text>
                      </Card.Body>
                    </Card>                
                  </CardGroup>                
                </Col>
              </Row>

              </>
            )
          })
        }
    </>
  )
}
export default ListaDeProdutos