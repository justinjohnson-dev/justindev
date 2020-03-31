import React, {useState} from 'react';
import './signup.css';
import {Link} from 'react-router-dom';
import { signUpUser } from '../authorization/index'

/* Utilizing React hooks */


const Signup = () => {
  const [values, setValues] = useState({
    name:'',
    email:'',
    password:'',
    error:'',
    success: false
  });

  // Destructuring
  const {name, email, password, success, error} = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false});

    signUpUser({name, email, password})
    .then(data => {
      if(data.error) {
        setValues({...values, error: data.error, 
                success: false})
      } else {
        setValues({
          ...values, 
          name:'',
          email:'',
          password:'',
          error: '',
          success: true
        })
      }
    });
  }

  const errorWhileSigningUp = () => (
    <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>{error}</div>
  );

  const showSuccessOnSignUp = () => (
    <div className="alert alert-info" style={{display: success ? '' : 'none'}}>
      Your new account has successfully been created! <Link to="/login">Login!</Link>
    </div>
  );

  const signUpForm = () => (
    <form>
      <h2 className='login-alert'>Create Your Account!</h2>
      <div className="form-group">
          <label className="text-muted">Name</label>
          <input onChange={handleChange('name')} type="text" value={name} className="form-control" />
      </div>
      <div className="form-group">
          <label className="text-muted">Email</label>
          <input onChange={handleChange('email')} type="email" value={email} className="form-control" />
      </div>
      <div className="form-group">
          <label className="text-muted">Password</label>
          <input onChange={handleChange('password')} type="password" value={password} className="form-control" />
      </div>
      <button onClick={handleSubmit} className="button create-button"><span>Create Account</span></button>
    </form>
  );

  return (
    <div>
      {showSuccessOnSignUp()}
      {errorWhileSigningUp()}
      {signUpForm()}
    </div>
  );
};


export default Signup;