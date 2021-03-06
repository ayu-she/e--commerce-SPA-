import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from "../../store/actions/productActions";
import classes from './Filter.module.css';

class Filter extends Component {
    render() {
        return !this.props.filteredProducts ? (
            <div> Loading...</div>
        ) :  (
            <div className={classes.filter}>
            <div className={classes.filterResult}>{this.props.filteredProducts.length} Products</div>
            <div className={classes.filterSort}>
                Order {" "}
                <select value={this.props.sort} 
                    onChange={(e) =>
                        this.props.sortProducts(
                          this.props.filteredProducts,
                          e.target.value
                        )
                      }
                >
                    <option >Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className={classes.filterSize}>
                Filter {" "}
                <select value={this.props.size} 
                onChange={(e) =>this.props.filterProducts(this.props.products, e.target.value)
            }>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            </div>
        )
    }
}
 const mapStateToProps = state => {
     return {
         size: state.products.size,
         sort: state.products.sort,
         products: state.products.items,
         filteredProducts: state.products.filteredItems
     }
 }

//  const mapDispatchToProps = dispatch => {
//      filterProducts,
//      sortProducts
//  }


export default connect( mapStateToProps, {filterProducts,
    sortProducts})(Filter);

//use Aux instead of Parent div