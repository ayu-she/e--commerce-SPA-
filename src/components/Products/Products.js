import React , {Component} from 'react';
import classes from './Products.module.css';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import {fetchProducts} from '../../store/actions/productActions';
import { addToCart } from '../../store/actions/cartActions';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import Rating from '../Rating';

class Products extends Component{
    constructor(props){
        super(props);
        console.log(props)
                this.state = {
            product: null,
            search: ''
        
        }; 
    }

    handleFilter = debounce((e) => {
        const value = e.target.value;
    
        // 1. Network delay in a real-world context
    
        this.setState({ search: this.props.products});
      }, 500)

    componentDidMount(){
        this.props.fetchProducts();
    }


    
    render(){
        
        return (
            <div>
                <h2>Amaira's</h2>
                <div className={classes.input}>
                    <input  type="text" name={'search'}  onChange={this.handleFilter.bind(this)} placeholder="type here to search"></input>
                </div>
                <hr></hr>
                <Fade bottom cascade={true}>
                <ul className={classes.products}>
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="products">
                            <div className={classes.imgDiv}> 
                                <Link to={{
            pathname: "/productScreen",
            product
          }}>
                                   
                                     
                                    <img src={product.image} alt={product.title}></img>
                                    </Link>
                                    <button onClick={()=> this.props.addToCart(product)} className={classes.buttonPrimary}>
                                            Add To Cart 
                                        </button>
                                    </div>      
                                
                                <div className={classes.productDetails}>
                                <p>{product.title}</p> 
                                <Rating 
                                  rating={product.rating}>
                                 </Rating>
                                <div className={classes.productPrice}>
                                    Price:${product.price}
                                </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                </Fade> 
            </div>
        )
    }
} 

 const mapStateToProps = state => {
    return {
        products: state.products.filteredItems
    }
}

 const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch (fetchProducts()),
        addToCart: (product) => dispatch(addToCart(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Products);