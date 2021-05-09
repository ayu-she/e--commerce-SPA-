//cart Page

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromcart, addToCart } from '../../store/actions/cartActions';
import classes from './Cart.module.css';



class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        showCheckout: false
    };this.submitData = this.submitData.bind(this);
}
inputPassword = event => {
  this.setState({ coupon: event.target.value });
};

submitData(event) {
  event.preventDefault();
  const { coupon} = this.state;
  const matches = coupon === "BOOTCAMP2021";
  matches ? alert("Coupon Applied") : alert("Coupon Not Found");  
}

subTotal=this.props.cartItems.reduce((a,c) => a+ c.price * c.count , 0) ;
 
    render() {
      const { cartItems } = this.props;
      return (
        <div className={classes.wrapper}>
            <div>
            <div className={classes.cart}>
              <ul className={classes.cartItems}>
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div>{item.description}</div>
                      ${item.price}
                      <div className={classes.right}>
                      x{item.count}
                      <button className={classes.btn} onClick={() => this.props.addToCart(item)}>
                            Add
                            </button>  
                            <button className={classes.btn} onClick={() => this.props.removeFromcart(item)}>
                            Remove
                            </button>                      
                            </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> 
          <div className={classes.summary}>
              <h2>Summary</h2>
              <hr></hr>
          <form onSubmit={this.submitData}>
              <label>Enter Coupon Code</label><br></br>
              <input id="coupon" type="text" name="coupon" onChange={this.inputPassword} ></input><br>
              </br>
              </form>
              {cartItems.length !== 0 && (
              <div className={classes.cart}>
              <div className={classes.total}>
                  <div>
                    <div className={classes.div}>
                      
                      <p>Subtotal: {" "}</p>
                        <p>$ {this.subTotal}</p>
            
                      
                      </div>
                      <div className={classes.div}>

                      <p>Shipping</p> 
                      <p>Free</p>
                      </div>
                      <div className={classes.div}>
                      <p>Taxes</p> 
                      <p>$13</p>
                      </div>
                      <hr></hr>
                      <div className={classes.div}>
                          <div>Total</div>
                          <div>{this.subTotal + 13}</div>
                        </div>
                  </div>
                  </div>
              </div>
            )}
          </div>

          </div>

           
      );
    }
  }

  const mapStateToProps = (state) => {
    return{
      cartItems: state.cart.cartItems
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      removeFromcart: (product) => dispatch (removeFromcart(product)),
      addToCart: (product) => dispatch (addToCart(product))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);























