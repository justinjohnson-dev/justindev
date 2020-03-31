import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';
import { signIn, authenticate, isAuthenticated } from '../authorization/index'



const Login = () => {
    const [values, setValues] = useState({
      email:'',
      password:'',
      error:'',
      load: false,
      redirectToReferrer: false
    });
  
    // Destructuring from state
    const { email, password, load, error, redirectToReferrer } = values
    const { user } = isAuthenticated();
  
    const handleChange = name => event => {
      setValues({...values, error: false, [name]: event.target.value});
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      setValues({ ...values, error: false, load: true });
  
      signIn({ email, password })
      .then(data => {
        if(data.error) {
          setValues({...values, error: data.error, load: false})
        } else {
          authenticate(data, () => {
            setValues({
                redirectToReferrer: true
              })
          })
        }
      });
    }
  
    const errorWhileSigningUp = () => (
      <div className="alert alert-danger error-top" style={{display: error ? '' : 'none'}}>Admin access only</div>
    );
  
    const showLoading = () => (
      load && (
          <div className="alert alert-info loading-top">
            <p>Loading...</p>
          </div>)
    );

    const redirectOurUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }

        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }
  
    const userMessage = () => (
        <div className="text-center user-message">
            <h4><i class="fas fa-tools"></i> Site is currently under construction 
                please check back later.. <i class="fas fa-tools"></i></h4> 
        </div>
      );

    const signUpForm = () => (
      <form className='admin-signin'>
        <h2 className='login-alert admin-login'>Admin Login</h2>
        <div className="form-group">
            <label className="text-muted">Email</label>
            <input onChange={handleChange('email')} type="email" value={email} className="form-control" />
        </div>
        <div className="form-group">
            <label className="text-muted">Password</label>
            <input onChange={handleChange('password')} type="password" value={password} className="form-control" />
        </div>
        <button onClick={handleSubmit} className="button create-button"><span>Login</span></button>
      </form>
    );
  
    return (
      <div>
        {userMessage()}
        {showLoading()}
        {errorWhileSigningUp()}
        {redirectOurUser()}
        {signUpForm()}
      </div>
    );
  };
  
  
export default Login;