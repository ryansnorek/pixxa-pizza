import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "./validation";
import axios from "axios";

 //  COMPONENTS //
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import Pizza from "./Components/Pizza";
import Help from "./Components/Help";

const initialValues = {
  name: "", size: "", sauce: false,
  toppings: "", sub: false, special: "",
}
const toppingList = [
  "pepperoni", "sausage", "bacon", "spicy_sausage",
  "chicken", "onions", "fruity_pebbles", "tomato", "garlic",
  "olives", "artichoke", "3cheese", "pineapple", "extra_cheese",
]

const App = () => {
  const [order, setOrder] = useState([]);
  const [toppingsOrdered, setToppingsOrdered] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState("");
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  // FORM VALIDATION //
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors(""))
      .catch(err => setFormErrors(err.errors));
  };
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);


 // TOPPINGS //
  useEffect(() => {
    const toppings = [];
    for (let item in formValues) {
      toppingList.forEach(topping => {
        if (topping === item && formValues[item] === true) {
          toppings.push(topping);
        }
      }) 
    }
    setToppingsOrdered(toppings);
  },[formValues]);


 // FORM CHANGES //
  const change = (name, value) => {
    // Validate that the name is over 2 characters
    if (name === 'name') validate(name, value)
    setFormValues({ ...formValues, [name]: value});
  };

 // SUBMIT FORM //
  const submit = (e) => {
    e.preventDefault()
    const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size,
        sauce: formValues.sauce,
        toppings: toppingsOrdered,
        sub: formValues.sub,
        special: formValues.special.trim(),
    }
    
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder(res.data);
      })
      .catch(err => console.error(`Error: ${err}`))
      .finally(res => {
        history.push("/ordered");
        setFormValues(initialValues);
      })
  };

  return (
    <>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/pizza'>
        <PizzaForm 
          formValues={formValues}
          change={change}
          submit={submit}
          errors={formErrors}
          disabled={disabled}
        />
      </Route>
      
      <Route path='/ordered'>
        <Pizza order={order}/>
      </Route>

      <Route path='/help'>
        <Help/>
      </Route>
    </>
  );
};
export default App;
