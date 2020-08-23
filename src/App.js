import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import formSchema from "./validation/formSchema";
import * as yup from "yup";
import OrderForm from "./OrderForm";
import style from "styled-components";
import Order from "./Order";
import Home from "./Home";
import Links from "./Links";

const SuperFancy = style.div`
display: flex;
flex-direction: column;
justify-content: center;
color: white;
background-color: royalblue;
padding: 1%;
margin: 2% auto;
width: 80%;
border-radius: 7.5%;
box-shadow: 10px 5px 5px black;
`;

const FancyPizza = style.div`
text-align: center;
a {
  font-size: 1.5rem;
  color: ${() => {
    let hex = () => Math.floor(Math.random() * 255).toString(16);
    return "#" + hex() + hex() + hex();
  }};
}
`;

const initialOrderForm = {
  name: "",
  size: "",
  toppings: {
    pepperoni: false,
    sausage: false,
    mushroom: false,
    broccoli: false,
  },
  special: "",
};

const initialOrderErrors = {
  name: "",
};

const initialOrders = [];
const initialBtnDisable = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialOrderForm);
  const [formErrors, setFormErrors] = useState(initialOrderErrors);
  const [disabled, setDisabled] = useState(initialBtnDisable);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
        setFormValues(initialOrderForm);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      },
    });
  };

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(
        (top) => formValues.toppings[top]
      ),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <Router>
      <div className="App">
        <FancyPizza>
        <Links />
        </FancyPizza>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pizza">
      <OrderForm
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
      <SuperFancy>
        {orders.map((order) => {
          return <Order key={order.id} details={order} />;
        })}
      </SuperFancy>
          </Route>
        </Switch >
      </div >
    </Router >
  );
};
export default App;
