import React from 'react';
import { addToCart } from './actions/ProductActions.js';

class ProductComponent extends React.Component {

  constructor(props) {
    super(props);
    this._addToCart = this._addToCart.bind(this);
  }

  _addToCart() {
    var data = this.props.data
    var cartItem = {
      id: data._id,
      name: data.name,
      price: data.price,
      currency: data.currency
    };
    var fri = '../image/fridge.jpg';
    addToCart(cartItem);
  }

  render() {
        // assign to props
        var data = this.props.data;
        debugger;

        return (
          <div className="thumbnail">
            {/* <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="product image" /> */}
            <img src="/fridge.jpg" alt="product image" />
            <div className="caption clearfix">
              <h3><a href={data.url}>{data.name}</a></h3>
              <div className="product__price">{data.price} {data.currency}</div>
              <div className="product__button-wrap">
                <button className="btn btn-primary" onClick={this._addToCart}>Add to cart
                </button>
              </div>
            </div>
          </div>
        );
  }

}

export default ProductComponent;
