
import "./productInCart.css";

const ProductInCart = (props) => {

  return (
    <div className="prod-cart">
      <img className="cartImage" src={"/imgs/"+props.data.image} alt="product iamge"></img>

      <div className="info">
        <h6>{props.data.title}</h6>
        <label>{props.data.category}</label>
      </div>

      <label className="price">{props.data.price.toFixed(2)}</label>
      <label className="quantity">{props.data.quantity}</label>
      <label className="total">total??</label>
      <button className="btn btn-sm btn-danger">Remove</button>



      <h6>{props.data.price}</h6>

      <h6>{props.data.quantity}</h6>
      <h6>{props.data.total}</h6>
      <h6>{props.data.bucket}</h6>
    </div>
  );
};

export default ProductInCart;