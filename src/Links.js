import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import style from "styled-components";

const FancyPizza = style.div`
text-align: center;
h1 {
  font-size: 4rem;
  color: ${() => {
        let hex = () => Math.floor(Math.random() * 255).toString(16);
        return "#" + hex() + hex() + hex();
    }};
}
`;

function Links() {
    return (
        <FancyPizza>
        <nav>
            <div className="links">
                <Link to="/">Home</Link>&nbsp;/&nbsp;
        <Link to="/pizza">Order Now!</Link>
            </div>
                <h1>Lambda Pizza</h1>
        </nav>
        </FancyPizza>
    );
}

export default Links;