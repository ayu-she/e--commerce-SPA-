import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import classes from '../Cart/Cart.module.css';

class Order extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  subTotal=this.props.cartItems.reduce((a,c) => a+ c.price * c.count , 0) ;

  render() {
    const { cartItems } = this.props;
    return (
      <div> 
        <div className={classes.title}>
          <div>
        <h2>Your Order has been placed!!</h2></div>
        <div><p>Order Summary...</p>
        </div>
        
        <div className={classes.cart}>
              <ul className={classes.cartItems}>
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <table className={classes.table}>
                      <tbody>
                        <tr>
                          <td>Item</td>
                          <td>{item.title}</td>
                        </tr>
                        <tr>
                          <td>Price: {" " }</td>
                          <td>${item.price} x {item.count}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>${this.subTotal + 13}</td>
                        </tr>
                        </tbody>
                      </table>
                  </li>
                ))}
              </ul>
            
            </div>
            <Link to="/"><button>Continue Shopping</button></Link>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cartItems: state.cart.cartItems
  }
}



export default connect(mapStateToProps)(Order);
