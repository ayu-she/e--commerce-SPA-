import React, {Component} from 'react';
import Products from './components/Products/Products';
import Header from './components/Header/Header'
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import CartPage from './components/Cart/CartPage';
import Shipping from './components/Shipping/Shipping';
import Payment from './components/Payment/Payment';
import Order from './components/order/Order';
import ProductScreen from './components/Products/ProductScreen';


class App extends Component {

  
  
  render(){
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="grid-container">
      <Header>
      </Header>
      
      <Switch>
        <Route path="/" exact>
        <main>
       <div className="content">
         <div className="main">
         
            <Products ></Products>
            

         </div>
       </div>
       </main>
       </Route>
      <Route path="/cartpage" render={(props) => <CartPage {...props} />} />
      <Route path="/checkout"><Checkout></Checkout> </Route> 
      <Route path="/YourCart"><Shipping></Shipping> </Route>
      <Route path="/payment"><Payment/> </Route>
      <Route path="/order"><Order/></Route>
      <Route path="/productScreen" component={ProductScreen}></Route> 
      
  
      </Switch> 
      <footer>
        All rights reserved
      </footer>
    </div>
    </BrowserRouter> 
    </Provider>
  );
}
}


export default (App);
