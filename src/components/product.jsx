import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
  return (<div className='product'>
            <h5>These are our amazing products!</h5>
            <img src="https://picsum.photos/200/300" alt="product iamge"></img>
            <h2> {props.title} </h2>
            <label className='price'>$Price</label>
            <label className='total'>$Total</label>
            <QuantityPicker></QuantityPicker>
            <button className='addBtn'>Add</button>
          </div>);
};


export default Product;