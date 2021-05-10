import React , {Component} from 'react';

import classes from  './Header.module.css';
import { connect } from 'react-redux';

class Header extends Component{

    render(){
        const { cartItems } = this.props;
        return (
            <header>
                <h4 className={classes.h4}><b><i>Amaira</i></b></h4>
                <nav className={classes.nav}>
                    <a href="/home">Home</a>
                    <a href="#">About</a>
                    <a href="#">Shop</a>
                    <a href="#">Help</a>
                    <a><div>
          {cartItems.length === 0 ? (
            <a href="/empty">Cart</a>
            ): (
            <a href='/YourCart' >Cart <sub>{cartItems.length}</sub>
                </a>
          )}
          </div>
</a> 
                </nav>
            </header>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      cartItems: state.cart.cartItems
    }
  }

  export default connect(mapStateToProps, null)(Header);  