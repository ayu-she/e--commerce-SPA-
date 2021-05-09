import React, { useState } from 'react'
import Checkout from '../Checkout/Checkout';
import classes from './Shipping.module.css';
import { Tab,TabList,TabPanel , Tabs} from "react-tabs";
import Payment from '../Payment/Payment';
import ShoppingCart from '../Cart/ShoppingCart';

const Shipping = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabCount = 3;
    const previous = () => setTabIndex((tabIndex+ tabCount - 1) % tabCount );
    const next = () => setTabIndex((tabIndex + 1) % tabCount );

  
    return (
        <div>
      <Tabs selectedIndex={tabIndex}>
        <TabList className={classes.Tabs}>
          <Tab>1. Shopping Cart</Tab>
          <Tab>2. Shipping Details</Tab>
          <Tab>3. Payment Option </Tab>
        </TabList>
        <hr></hr>
        <TabPanel><ShoppingCart/>
        <button onClick={() => previous()}>Back</button>
      <button onClick={() => next()}>Next</button></TabPanel>
        <TabPanel><Checkout next={next} previous={previous}/> </TabPanel>
      <TabPanel><Payment next={next} previous={previous}/></TabPanel>
      </Tabs>
     </div>
    );
  };

  export default Shipping;

