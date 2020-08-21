import React, { useState, useEffect } from "react";
import axios from "axios";
import formSchema from "./validation/formSchema";
import * as yup from "yup";
import Order from "./Order";
import OrderForm from "./OrderForm";

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
    <div className="App">
      <h1 className="welcome">Lambda Pizza</h1>
      <h2>Our pizza is made fresh!</h2>
      <OrderForm
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      {orders.map((order) => {
        return <Order key={order.id} details={order} />;
      })}
    </div>
  );
};
export default App;
