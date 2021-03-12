import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Utilisateur extends Component{
    
    constructor(props){
        super(props);
        this.state = {

            errorMessage : '',
            email : '',
            passWord : '',
          
        }
    }
 
     hundelInputChange = event => {
         this.setState({
             [event.target.name] : event.target.value
         })
     }
 
     hundelFormSubmit = event =>{
         event.preventDefault();
         const authentification = {
             email : this.state.email,
             passWord : this.state.passWord,
         }
          axios.post('http://localhost:3001/api/login', authentification)
           .then(res =>{
               this.setState({
                   email : '',
                   passWord : '',
               });
                
                //

                if (typeof(Storage) !== "undefined") {
                  // Store
                    sessionStorage.setItem("utontifecation", "truue");
                } else {
                    alert("Sorry, your browser does not support Web Storage...");
                }
                //
                this.props.history.push('/DashboardUser');
              

           }).catch(err => { 
            this.setState({errorMessage: 'Invalid email/password combination'});
          })
           
     }

    render(){
        return(
   
            
      <div className="login">
        
        <div className="container">
        <div className="row">

            <div className="main categorie rounded-3" >
                <br />
                { this.state.errorMessage &&
                <div className="alert alert-danger" role="alert"> { this.state.errorMessage } </div> }
                <h3>Please log in, or <Link className="loglink" to="/inscription">SIGN UP</Link></h3>
                
                <form method="post" onSubmit={this.hundelFormSubmit}>
                    <div className="form-group">
                    <label htmlFor="inputUsernameEmail">Username or email</label>
                    <input 
                    onChange={this.hundelInputChange}
                    value={this.state.email}
                    type="email" name="email" className="form-control" placeholder="thewinner@aaa.aa" required />
                    </div>
                    <div className="form-group">
                    {/* <Link className="pull-right" to="">Forgot password?</Link> */}
                    <label htmlFor="inputPassword">Password</label>
                    <input 
                    onChange={this.hundelInputChange}
                    value={this.state.passWord}
                    type="password" name ="passWord" className="form-control" placeholder="Your Password" required/>
                    </div>
                
                    <button type="submit" className="btn btn btn-primary">
                    Log In
                    </button>
                </form>
            
            </div>
            
        </div>
        </div>
      </div>
            

        )
    }
}


export default Utilisateur ;