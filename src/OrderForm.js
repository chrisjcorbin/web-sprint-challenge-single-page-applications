import React from 'react';
import style from "styled-components";

const SuperFancy = style.div`
display: flex;
flex-direction: column,
justify-content: center;
color: white;
background-color: rebeccapurple;
padding: 1%;
margin: 2% auto;
width: 80%;
border-radius: 7.5%;
box-shadow: 10px 5px 5px goldenrod;
.errors{
    color: red;
}
.submitBtn {
  background-color: ${() => {
    let hex = () => Math.floor(Math.random() * 255).toString(16);
    return "#" + hex() + hex() + hex();
  }};
  border: none;
  color: white;
  padding: 1%;
  border-radius: 20%;
  text-align: center;
  font-size: .75rem;
}
`;

const OrderForm = (props) => {

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onCheckBoxChange = evt => {
        const { name, checked } = evt.target;
        checkboxChange(name, checked);
    }

    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    return (
      <div>
        <SuperFancy>
          <form className="form-wrapper" onSubmit={onSubmit}>
            <div>
              <h3>Build Your Pizza</h3>
            </div>
            <div className="errors">
              <div>{errors.name}</div>
            </div>

            <label>
              What name would you like on your order?
              <input
                className="nameInput"
                value={values.name}
                onChange={onInputChange}
                placeholder="Enter a Name"
                name="name"
                maxLength="35"
              />
            </label>

            <label>
              Size
              <select value={values.size} onChange={onInputChange} name="size">
                <option value="select">Select a Size</option>
                <option value="small">Small (10")</option>
                <option value="medium">Medium (12")</option>
                <option value="large">Large (14")</option>
                <option value="extra-large">Extra Large (18")</option>
              </select>
            </label>
            <br />

            <div className="checkboxes">
              <h4>Choose your Toppings:</h4>
              <label>
                Pepperoni
                <input
                  name="pepperoni"
                  type="checkbox"
                  checked={values.toppings.pepperoni === true}
                  onChange={onCheckBoxChange}
                />
              </label>
              <label>
                Sausage
                <input
                  name="sausage"
                  type="checkbox"
                  checked={values.toppings.sausage === true}
                  onChange={onCheckBoxChange}
                />
              </label>
              <label>
                Mushroom
                <input
                  name="mushroom"
                  type="checkbox"
                  checked={values.toppings.mushroom === true}
                  onChange={onCheckBoxChange}
                />
              </label>
              <label>
                Broccoli
                <input
                  name="broccoli"
                  type="checkbox"
                  checked={values.toppings.broccoli === true}
                  onChange={onCheckBoxChange}
                />
              </label>
            </div>
            <br />

              <label>
                Special Instructions:
                <textarea
                className="specialInput"
                value={values.special}
                onChange={onInputChange}
                placeholder="Enter additional instructions"
                name="special"
                maxLength="100"
                />
              </label>
            <br />
            <br />

            <button className="submitBtn" disabled={disabled}>
              Place Order
            </button>
          </form>
        </SuperFancy>
      </div>
    );
}

export default OrderForm;