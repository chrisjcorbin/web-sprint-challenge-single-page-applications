import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import OrderForm from './OrderForm'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import style from "styled-components";

const WhiteOut = style.div`
a {
  text-decoration: none;
  color: lightgrey;
}
`;

const Header = () => {
    const location = useLocation();
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    };

    const atPizzaPage = location.pathname === "/pizza";
    return atPizzaPage && <button onClick={handleBackClick}>Back</button>
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WhiteOut>
        <Link to="/">Lambda Pizza</Link>{" "}
      </WhiteOut>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pizza" component={OrderForm} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);