import React from 'react';

const Hobby = (props) => {
    return (
        <div className="hobby-block">
            <p>Hobby</p>
            <div className="form-check">
                <input 
                    name="isReading"
                    value="Reading"
                    type="checkbox"
                    checked={props.isReading} 
                    className="form-check-input"
                    onChange={ (event) => props.handleChange(event) }  
                />
                <label className="form-check-label" >Reading</label>
            </div>
            <div className="form-check">
                <input 
                    name="isPlaying"
                    value="Playing"
                    type="checkbox" 
                    checked={props.isPlaying}
                    className="form-check-input" 
                    onChange={ (event) => props.handleChange(event) } 
                />
                <label className="form-check-label" >Playing</label>
            </div>
            <div className="form-check">
                <input 
                    name="isDrawing"
                    value="Drawing"
                    type="checkbox" 
                    checked={props.isDrawing}
                    className="form-check-input" 
                    onChange={ (event) => props.handleChange(event) } 
                />
                <label className="form-check-label" >Drawing</label>
            </div>
        </div>
    );
}

export default Hobby;