import React from "react";
import Header from "./Header";

const PizzaForm = ({ formValues, change, submit, errors, disabled }) => {
   
    const onChange = e => {
        const { name, value, checked, type } = e.target;
        const theValue = type === 'checkbox' ? checked : value;
        change(name, theValue);
    }

    return (
    <>
        <Header/>
        <div className="pizza-form">
            <h1>Build_Your_Own.exe</h1>
            <img src="https://thumbs.gfycat.com/AdeptGargantuanAfricanwilddog-max-1mb.gif" alt="Pizza Header"/>
            <form onSubmit={submit}>
                <div className="errors">{errors}</div>
                <label>
                    <input  id="name-input"
                            type="text"
                            name="name"
                            value={formValues.name} 
                            onChange={onChange} 
                            placeholder="What's your name?"
                    />
                </label>
                <div className="subheader">
                    <h4>Choice_of_Size.txt</h4>
                </div>
                <select id="size-dropdown" name="size" onChange={onChange}>
                    <option value="large">size["large"]</option>
                    <option value="smol">size["smol"]</option>
                    <option value="medium">size["medium"]</option>
                    <option value="massive">size["MASSIVE"]</option>
                </select>
                <div className="subheader">
                    <h4>Choice_of_Sauce.pdf</h4>
                </div>
                <div className="sauce">
                    <div className="sauce-left">
                        <label><input value="red" name="sauce" type="radio" onChange={onChange}></input>originalRed</label>
                        <label><input value="ranch" name="sauce" type="radio" onChange={onChange}></input>garlicRanch</label>
                    </div>
                    <div className="sauce-right">
                        <label><input value="bbq" name="sauce" type="radio" onChange={onChange}></input>bbqSauce</label>
                        <label><input value="alfredo" name="sauce" type="radio" onChange={onChange}></input>spinachAlfredo</label>
                    </div>
                </div>
                <div className="subheader">
                    <h4>Add_Toppings.csv</h4>
                </div>
                <div className="toppings">
                    <div className="toppings-left">
                        <label><input name="pepperoni" type="checkbox" onChange={onChange}/>pepperoni</label>
                        <label><input name="sausage" type="checkbox" onChange={onChange}/>sausage</label>
                        <label><input name="bacon" type="checkbox" onChange={onChange}/>bacon</label>
                        <label><input name="spicy_sausage" type="checkbox" onChange={onChange}/>spicySausage</label>
                        <label><input name="chicken" type="checkbox" onChange={onChange}/>grilledChicken</label>
                        <label><input name="onions" type="checkbox" onChange={onChange}/>onions</label>
                        <label><input name="fruity_pebbles" type="checkbox" onChange={onChange}/>fruityPebbles</label>
                    </div>
                    <div className="toppings-right">
                        <label><input name="tomato" type="checkbox" onChange={onChange}/>dicedTomato</label>
                        <label><input name="garlic" type="checkbox" onChange={onChange}/>roastedGarlic</label>
                        <label><input name="olives" type="checkbox" onChange={onChange}/>blackOlives</label>
                        <label><input name="artichoke" type="checkbox" onChange={onChange}/>artichokes</label>
                        <label><input name="3cheese" type="checkbox" onChange={onChange}/>threeCheese</label>
                        <label><input name="pineapple" type="checkbox" onChange={onChange}/>pineapple</label>
                        <label><input name="extra_cheese" type="checkbox" onChange={onChange}/>extraCheese</label>
                    </div>
                </div>
                <div className="subheader">
                    <h4>Choice_of_Substitute.js</h4>
                </div>
                <label>
                    <input 
                        name="sub"
                        type="checkbox" 
                        onChange={onChange}
                    />Gluten Free Crust (+$1.00)
                    </label>
                <div className="subheader">
                    <h4>SmartOven_ID</h4>
                </div>
                <label>
                    <input 
                        value={formValues.special}
                        id="special-text" 
                        name="special"
                        type="text" 
                        onChange={onChange}
                        placeholder="xj2dis007"
                    />
                </label>
                <div className="order">
                    <button 
                        id="order-button" 
                        disabled={disabled}
                    >
                    
                    Download Pizza</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default PizzaForm;