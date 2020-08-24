import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import style from "styled-components";

const FancyPizza = style.div`
text-align: center;
.orderNow {
  background-color: ${() => {
        let hex = () => Math.floor(Math.random() * 255).toString(16);
        return "#" + hex() + hex() + hex();
    }};
  border: none;
  color: white;
  padding: .5%;
  border-radius: 20%;
  text-align: center;
  font-size: .75rem;
}
`;

function Home(props) {
    return (
        <FancyPizza>
        <div className="home">
            <div className="heading">
                <h2>Where Pizza is made fresh every order!</h2>
                <br />
                <br />
                <Link to="/pizza">
                        <button className="orderNow">Order Pizza Now!</button>
                </Link>
            </div>
        </div>
        </FancyPizza>
    );
}

export default Home;