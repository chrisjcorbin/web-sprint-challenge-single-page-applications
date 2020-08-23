import React from 'react';
import style from 'styled-components';

const FancyPizza = style.div`
background-color: black;
font-weight: bold;
padding: 2%;
border-radius: 7.5%;
`

function Order({ details }) {
    return (
      <div className="order-summary">
        <h4>Congrats! Pizza is on it's way!</h4>
        <p>{details.name} your pizza is being made:</p>
        <p>You ordered a {details.size} pizza with the following toppings:</p>

        {!!details.toppings && !!details.toppings.length && (
          <div>
            <ul>
              {details.toppings.map((select, option) => (
                <li key={option}>{select}</li>
              ))}
            </ul>
          </div>
        )}
        <FancyPizza>
        <p>Your Special Requests: {details.special}</p>
        </FancyPizza>
      </div>
    );
}

export default Order;