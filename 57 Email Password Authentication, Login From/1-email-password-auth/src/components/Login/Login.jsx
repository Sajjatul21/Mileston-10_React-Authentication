import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../firebase/firebase.config';
import { Link } from 'react-router-dom';



const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();  //create reference   
    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);

        //password validation
        setError('');     // আমরা যদি এখানে empty string না দেই তখন আমরা যখন password validation এর বাহিরে password দিব তখন  তো আমাদরে error দেখবে তারপর আমরা যখস তা ঠিক করবো তখন সে error টাকে state এ রেখে দিবে তখন আমরা correct password দিলেও সে error যাবে না তাই যখন error না পাবে তখন  আমরা state টা empty string করে দিব।
        setSuccess('');
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Please add a special character.');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters');
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User Login Success');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });

    };

    const handleResetPassword = (event) => {
        // console.log(emailRef.current);
        // console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide your email address to res password');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });

    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p className='text-danger'>{error}</p>
            <p><small>Forget Password? Please<button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>

        </div>
    );
};

export default Login;

// 59-7 Sign In, Login, Toggle Registration and login, Handle Email Verification
