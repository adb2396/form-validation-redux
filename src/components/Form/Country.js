import React from 'react';

const Country = (props) => {
    return (
        <div className="country-block">
            <label>Contry</label>
            <select 
                value={props.value}
                onChange={ (event) => props.handleChange(event) }
                name="country"
                className="custom-select"
            >
                    <option value="None">-- Select --</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
            </select>
        </div>
    );
}

export default Country;