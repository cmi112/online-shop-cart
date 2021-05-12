
import React from 'react';
import { useSelector } from 'react-redux';
import Shop from "./components/Shop"
import  "../src/styles/styles.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Footer from "./components/Footer"

import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
// import { Button } from 'react-bootstrap';

function App() {
  const {cart} =useSelector(state=>state)
  // const dispatch=useDispatch()
  return (
    <>
       <Router>
      <div > 
        <nav >
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart"> &#x1F6D2; </Link>
              <span>{cart.length}</span>
            </li>
          </ul>
        </nav>
        <hr />
<Switch>
  <Route exact path="/">
    <Shop />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  <Route path="/cart">
    <Cart />
  </Route>
</Switch>
      </div>
    </Router>
    <Footer/>
             
    </>
  );
}


export default App;