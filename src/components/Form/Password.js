import React from 'react';

const Password = (props) => {
    return (
        <div className="password-block">
            <div className="form-group">
                <label>Password</label>
                <input 
                    name="password"
                    type="password" 
                    className="form-control" 
                    placeholder="Password"
                    onChange={ (event) => props.handleChange(event) }     
                />
            </div>
            <div className="form-group">
                <label>Retype password</label>
                <input 
                    name="retypePassword"
                    type="password" 
                    className="form-control" 
                    placeholder="Password"
                    onChange={ (event) => props.handleChange(event) }     
                />
            </div>
        </div>
    );
}

export default Password;