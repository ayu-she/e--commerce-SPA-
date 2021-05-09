import React, { Component } from 'react'

import classes from '../Cart/Cart.module.css';
import CartPage from '../Cart/CartPage';
;
export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            address2: "",
            country: "",
            city: "",
            zipcode: "",
            number: "",
            coupon: "",
            
        };
    }
  
    handleInput = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    };


    render() {
     
        return (
                <div className={classes.wrapper}>
                <form class={classes.form} onSubmit={this.props.next}>
                    <ul className={classes.checkoutForm}>
                        <div className={classes.div}>
                        <li>
                            <label>First Name</label>
                            <br></br>
                            <input 
                                name="firstName"
                                type="text" 
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        <li>
                            <label>Last Name</label>
                            <br></br>
                            <input 
                                name="lastName"
                                type="text" 
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        </div>
                        <li>
                            <label>Address</label>
                            <br></br>
                            <input 
                                name="address"
                                type="text" 
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        <li>
                            <label>Address2</label>
                            <br></br>
                            <input 
                                name="address2"
                                type="text" 
                                width="100%"
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        <div className={classes.div}>
                        <li>
                            <label>Country</label>
                            <br></br>
                            <input 
                                name="Country"
                                type="text" 
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        <li>
                            <label>City</label>
                            <br></br>
                            <input 
                                name="City"
                                type="text" 
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        </div>
                        <div className={classes.div}>
                        <li>
                            <label>Zip/Postal Code</label>
                            <br></br>
                            <input 
                                name="zipcode"
                                type="number" 
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <br></br>
                            <input 
                                name="number"
                                type="text" 
                                required 
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        </div>
                        <button type="submit">Next</button>
                        <button onClick={this.props.previous}>Back</button>
                        
                    </ul>
                    
                </form>
                
                <div >
                  <h4>Summary</h4>
                  <hr></hr>
                  <CartPage/> 
                  </div> 
            </div>
        )
    }
}
