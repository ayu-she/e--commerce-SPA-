import React from 'react';
// import { Link } from 'react-router-dom';
// import data from '../data';
// import Rating from '../components/Rating';
import { addToCart } from '../../store/actions/cartActions';
import { connect } from 'react-redux';
import classes from './Products.module.css';
import Rating from '../Rating';

function ProductScreen(props) {
    console.log(props);

  const product = props.products.find((x) => x._id === props.location.product._id);
  return (
    <div>
                            
                            <div className={classes.content}>
                                <div><img src={product.image} alt={product.title}></img></div>
                                <div>
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <Rating 
                                  rating={product.rating}
                                  numReviews={product.reviews.length}>
                                 </Rating>
                                 <hr></hr>
                                 <div className={classes.content}> <div>${product.price}</div>
                                 <p>
                                        Available Sizes : {" "}
                                        {product.availableSizes.map((x) => (
                                            <span>
                                            {" "}
                                            <button className={classes.button}>{x}</button>
                                        </span>
                                        ))}
                                    </p></div><hr></hr>
                                    <p>
                                        {product.description}
                                    </p>
                                    <button className={classes.buttonPrimary} onClick={() => {
                                            this.props.addToCart(product);
                                        }}>Add To Cart
                                        </button>
                                    
                                    <div>
                                    </div>
                                    <br></br>
                                    <h2> Reviews</h2>
                                   {product.reviews.map(review => 
                                   <div className={classes.content}>
                                    <div>Name: {review.name}</div>
                                    <div>{review.text}</div>
                                    </div>
                                    )} 
                                
                                </div>
                            </div>
                        
    </div>
  );
}
const mapStateToProps = state => {
    return {
        products: state.products.filteredItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchProducts: () => dispatch (fetchProducts()),
        addToCart: (product) => dispatch(addToCart(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductScreen);