import React from 'react';

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
      </div>
    );
}

export default Order;