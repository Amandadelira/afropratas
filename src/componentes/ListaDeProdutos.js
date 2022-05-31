import { useEffect, useState } from "react";

const ListaDeProdutos = () => {
const [products, setProducts] = useState(null);

useEffect(() => {
  fetch("http://localhost/afropratas-back-end/api/product/select-all")
    .then((response) => response.json())
    .then((data) => setProducts(data));
}, []);

return (
  <>
  {products &&
    products.map((product) => {
      return (
        <div key={product.id}>
          <img src={product.photo} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.price}</p>
        </div>
      )
    })
  }
  </>
)
}
export default ListaDeProdutos