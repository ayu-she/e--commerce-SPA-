import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPage from '../Cart/CartPage';
import classes from './Payment.module.css';
import {createOrder, clearOrder} from "../../store/actions/orderActions";
import { Link } from 'react-router-dom';
class Payment extends Component {
    state={
        cc:" ",
        cardNum: "",
        validity: "",
        cvv: "",
        paypal: "",
    }
   

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.props.name,
            email: this.props.email,
            address: this.props.address,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a,c) => a + c.price+c.count, 0),
        };
        this.props.createOrder(order);
    }
    handleInput = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    };
    render() {
        return (
            <div className={classes.paymentCredentials} >
                 <form className={classes.form} >
                    <h4>PaymentMethod</h4>
                    <hr></hr>
                    <div className={classes.box}>
                <input type="radio" id="cc" name="cc" required onChange={this.handleInput}></input>
                <label>Credit Card</label><br></br>
                <div className={classes.credentials}>
                <input type="number" name="cardNum" placeholder="0000 0000 0000 0000" required onChange={this.handleInput}></input>
                <input type="number" name="validity" placeholder="MM/YY" required onChange={this.handleInput}></input>
                <input type="number" name="cvv" placeholder="CVV" required onChange={this.handleInput}></input>
                </div>
                <input type="text" name="name" placeholder="Card Holder Name" required onChange={this.handleInput}></input><br></br>
                </div>
                <div className={classes.box}>
                <input type="radio" id="paypal" name="paypal" value="male" onChange={this.handleInput}></input>
                <label>Paypal</label>
                <p></p>
                </div>
            <button type="submit"><Link to="/order"> Pay </Link></button>
            <button onClick={this.props.previous}>Back</button>
                </form>
                <div className={classes.summary}>
                <h4>Summary</h4><hr></hr>
                <CartPage/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.order.order,
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps,{createOrder,clearOrder})(Payment);
