import React, { Fragment } from 'react';
import './navigation.css';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../authorization/index'


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {color: '#ff9900'}
    } else {
        return {color: 'ffffff'}
    }
};

// Destructuring history
const Navigation = ( {history} ) => (
    <nav>
        <h3 className="logo">JJ Interactive Resume</h3>
        <ul className="nav-links">

            
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link className='nav-style links' style={isActive(history, '/user/dashboard')} to='/user/dashboard'>
                        User Dashboard
                    </Link>
                </li>
            )}
            
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link className='nav-style links' style={isActive(history, '/admin/dashboard')} to='/admin/dashboard'>
                        Admin Dashboard
                    </Link>
                </li>
            )}
            

            {!isAuthenticated() && (
                <Fragment>
                    <li>
                        <Link className='nav-style links' style={isActive(history, '/')} to='/'>
                            Login
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li>
                    <span className='nav-style links' 
                            style={{cursor: 'pointer', color: 'ffffff'}}
                            onClick={() => signout(() =>
                                history.push('/login'))}
                            to='/signout'>
                        Sign Out
                    </span>
                </li>
            )}
            
        </ul>
    </nav>
);



export default withRouter(Navigation);