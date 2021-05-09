import React, { Component } from 'react';
import classes from './Cart.module.css';
import { connect } from 'react-redux';


class CartPage extends Component {
    
    
    subTotal=this.props.cartItems.reduce((a,c) => a+ c.price * c.count , 0) ;

    

    render() {

        const { cartItems} = this.props;
        return (
            
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
                      <div className={classes.right}>
                            ${item.price} x {item.count}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
                        <div>Total </div>
                        <div>{this.subTotal + 13}</div></div>
                  </div>
                  </div>
              </div>
            )}
          </div>
        )
    }
  }


const mapStateToProps = (state) => {
  return{
    cartItems: state.cart.cartItems
  }
}



export default connect(mapStateToProps)(CartPage);