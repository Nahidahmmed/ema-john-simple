import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log(from);


    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, {replace: true})
    })
    .catch(error => {
        console.log(error);
    })
    }
    

    

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="">password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required/>
                    <p onClick={()=>setShow(!show)}><small>
                        {
                            show ? <span>Hide password</span> : <span>Show password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="login" />
            </form>
            <p><small>New to Ema-jhn? <Link to="/signup">Create new Account</Link></small></p>
        </div>
    );
};

export default Login;