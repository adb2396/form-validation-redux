import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actionCreator/actions';
import Password from './Form/Password';
import Gender from './Form/Gender';
import Hobby from './Form/Hobby';
import Country from './Form/Country';
import Email from './Form/Email';


class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            retypePassword: "",
            gender: "",
            hobby: {
                isReading: false,
                isPlaying: false,
                isDrawing: false,
            },
            country: ""
        }
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if( type === "checkbox" ){
            this.setState( prevState => {
                return {
                    hobby: {
                        ...prevState.hobby,
                        [name]: checked
                    }
                }
            })
        } 
        else {
            this.setState({
                [name]: value
            });
        }
        
    }

    filterHobby() {
        const output = {
            hobbies: {},
            length: 0
        };
        for (let [key, value] of Object.entries(this.state.hobby)) {
            if(value === true) {
                output.length++;
                output.hobbies[key] = value;
            }
        }
        return output;
    }

    emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    handleSubmit = () => {
        const {email, password, retypePassword, gender, country} = this.state;
        const checkedHobby = this.filterHobby();

        //console.log( email, password, retypePassword, gender, checkedHobby.length, country );

        if( email === "" || 
            password === "" || 
            retypePassword === "" ||
            gender === "" || 
            checkedHobby.length === 0 ||
            country === "" || 
            country === "None" ) {
                alert(" All fields are required. ");
        }
        else if ( checkedHobby.length < 2 ) {
            alert(" Select a minimum of two hobby. ");
        }
        else if ( password !== retypePassword ) {
            alert(" Password don't match ..!! ");
        }
        else if ( !this.emailIsValid(email) ) {
            alert(" Enter a valid email. ")
        }
        else {
            let user = { 
                email: email, 
                password: password, 
                retypePassword: retypePassword,
                gender: gender,
                hobby: checkedHobby.hobbies,
                country: country
            };
            this.props.submitUser(user);
        }
    }

    render() {
        return (
            <div className="create">
                <form>
                    <Email email={this.email} handleChange={this.handleChange} />
                    <Password handleChange={this.handleChange} />
                    <Gender 
                        gender={this.state.gender} 
                        handleChange={this.handleChange}    
                    /><br />
                    <Hobby
                        isReading={this.state.hobby.isReading}
                        isPlaying={this.state.hobby.isPlaying}
                        isDrawing={this.state.hobby.isDrawing} 
                        handleChange={this.handleChange}     
                    /><br /> 
                    <Country 
                        value={this.state.country} 
                        handleChange={this.handleChange}
                    /><br />  
                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Users: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitUser: (user) => {
            dispatch(Actions.addUser(user));
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Create);