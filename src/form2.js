import React from "react";
import './form2.css';

// import './script.js';

export default class Form extends React.Component {
  state = {
    firstName: "",
      lastName: "",
      PhoneNumber:"",
      EmailId: "",
    
      file:""
    
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
        PhoneNumber:"",
        EmailId: "",
      
        file:""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      PhoneNumber:"",
      EmailId: "",
    
      file:""
    });
  };

  

  render() {
    return (
        
        <div class="container">
        <h1>Registration Form </h1>

        <form action="noaction.php">
            <div class="form-group">
                <input type="text" Name=" FirstName" placeholder="Enter your First name"/>
            </div>
            <div class="form-group">
                <input type="text" Name="LastName " placeholder="Enter your Last name"/>
            </div>
            <div class="form-group">
                <input type="number" Name="PhoneNumber" placeholder="Contant Number"/>
            </div>
            <div class="form-group">
                <input type="email" Name="EmailId " placeholder="Email"/>
            </div>

            <div class="form-group left" >
                {/* <input type="" class="upimage" Name="file " placeholder="Upload Image"/> */}
                Upload Image
               
            </div>
            <div class="form-group">
                <input type="file" class="upimage" Name="file " placeholder="Upload Image"/>
                
               
            </div>
            
            
            <button class="btn1">

                <a class="cor1">Submit</a> </button>
        </form>

    </div>

    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      
        
    );
  }
}
