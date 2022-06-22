import { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import desejo from "../../assets/img/desejo.svg";
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
      <div className="listadeprodutos">
        {products &&
          products.map((product) => {
            return (
                  <div className="cardu" key={product.id}>
                    <Card.Img variant="top" src={product.photo} alt={product.title} className="cardis" />
                    <Card.Body className="textinho">
                      <div className="texto">
                        <div className="descri">
                          <Card.Title><h1>{product.title}</h1></Card.Title>
                          <img src={desejo} className="coracao" alt="icone" />
                        </div>
                        <Card.Text className="valor">{product.price}</Card.Text>
                      </div>
                    </Card.Body>
                  </div>                               
            )
          })
        }
      </div>
      <div className="embaixo">
        <div className="coluna_m">
          <div className="col-12 ">
            <span>Sobre nossas peças</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default ListaDeProdutos