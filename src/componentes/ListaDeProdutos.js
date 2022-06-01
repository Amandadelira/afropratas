import { useEffect, useState } from "react";
import {Card} from "react-bootstrap";

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
        {products &&
          products.map((product) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              // <div key={product.id}>
              //   <img src={product.photo} alt={product.title} />
              //   <h1>{product.title}</h1>
              //   <p>{product.price}</p>
              // </div>
            )
          })
        }
      </div>
    </>
  )
}
export default ListaDeProdutos