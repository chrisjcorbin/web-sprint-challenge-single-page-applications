import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import style from "styled-components";

const FancyPizza = style.div`
text-align: center;
`;

function Home(props) {
    return (
        <FancyPizza>
        <div className="home">
            <div className="heading">
                <h2>Where Pizza is made fresh every order!</h2>

                <Link to="/pizza">
                    <button>Order Pizza Now!</button>
                </Link>
            </div>
        </div>
        </FancyPizza>
    );
}

export default Home;