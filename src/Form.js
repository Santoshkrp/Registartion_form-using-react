import React from "react";
import './form.css';
import bg from './gym.jpg'

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        First Name : 
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />

        Last Name :

        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        
       Email :
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        Password :
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
