import React from 'react';

const Gender = (props) => {
    return (
        <div className="gender-block">
            <p>Gender</p>
            <div className="form-check">
                <input 
                    id="male"
                    value="male"
                    name="gender"
                    type="radio" 
                    checked={props.gender === "male" }
                    onChange={ (event) => props.handleChange(event) }
                    className="form-check-input" 
                />
                <label className="form-check-label" >Male</label>
            </div>
            <div className="form-check">
                <input 
                    id="female"
                    value="female"
                    name="gender"
                    type="radio" 
                    checked={props.gender === "female" }
                    onChange={ (event) => props.handleChange(event) }
                    className="form-check-input" 
                />
                <label className="form-check-label" >Female</label>
            </div>
        </div>
    );
}

export default Gender;