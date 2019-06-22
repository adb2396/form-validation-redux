import React from 'react';

const Email = (props) => {
    return (
        <div className="form-group">
            <label>Email address</label>
            <input 
                id="email"
                type="email"
                name="email"
                onChange={props.handleChange} 
                value={props.email}  
                className="form-control" 
                placeholder="Enter email"     
            />
        </div>
    );
}

export default Email;