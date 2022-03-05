import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const data = useContext(DataContext);
  
  return (
    <div className="app">
      <Switch>
        <Route path="/product-detail/:productId">
          <ProductDetail product={dataCtx.name} />
        </Route>
        <Route path="/headphones">
          <Headphones />
        </Route>
        <Route path="/speakers">
          <Speakers />
        </Route>
        <Route path="/earphones">
          <Earphones />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
