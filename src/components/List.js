import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actionCreator/actions';

class List extends React.Component {

    constructor(props) {
        super(props);

        this.deleteUserArr = [];
    }

    handleCheckBox = (event) => {
        const { value, checked } = event.target;

        if( checked && !this.deleteUserArr.includes(value)) {
            console.log(value)
            this.deleteUserArr.push(value);
        }
        else {
            const idx = this.deleteUserArr.indexOf(value);
            console.log(value)
            this.deleteUserArr.splice(idx, 1);
        }
    }

    handleDelete = () => { this.props.deleteUser(this.deleteUserArr); this.deleteUserArr = []; };

    render() {
        return (
            <div className="list">
                <h4>List</h4><button onClick={ this.handleDelete } type="button" className="btn btn-primary">Delete</button>
                {
                    this.props.Users.map((user, index) => {
                        //.log(index);
                        return  (
                            <div className="user-list" key={index}>
                                    { `Email: ${user.email}` }<br />
                                    { `Password: ${user.password}` }<br />
                                    { `RetypePassword: ${user.retypePassword}` }<br />
                                    { `Gender: ${ user.gender }` }<br />
                                    { `Hobby:  
                                        ${user.hobby.isReading ? "   Reading," : "" } 
                                        ${user.hobby.isPlaying ? "   Playing," : "" } 
                                        ${user.hobby.isDrawing ? "   Drawing," : "" }` 
                                    } 
                                    <br />
                                    { `Country: ${user.country}` }
                                <p className="delete">
                                    <input 
                                        value={`${user.email}`}
                                        type="checkbox"
                                        name={`${user.email}`}
                                        className="form-check-input"
                                        onChange={ this.handleCheckBox }  
                                    />
                                    Check to delete
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       Users: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (delUsers) => {
            dispatch(Actions.deleteUser(delUsers));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(List);