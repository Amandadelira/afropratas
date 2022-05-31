import './CardProduct.css'

const CardProduct = (props) => {
    const {id, photo, title, price
         } = props;    
    return (
      <div data-id={id} 
           className="cardavatar">
        <img src={photo}
            alt={'title'}
            width="76px"
            height="76px"
        />
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
      </div>
    );
  }
  
export default CardProduct;