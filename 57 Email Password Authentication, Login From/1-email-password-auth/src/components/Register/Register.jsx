import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updatePassword, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { Link, useLoaderData } from 'react-router-dom';



const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        // console.log(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        /*google search: Regex to validation password strength/ password validation regular expression (https://stackoverflow.com/questions/5142103/regex-to-validate-password-strength) */
        // validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Please add a special character.');
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your passwords');
            return;
        }

        /* create user in firebase */
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                // setInterval(() => setSuccess(''), 3000);
                sendVerificationEmail(loggedUser);
                // updateUserData(loggedUser, name);
                updateUserData(loggedUser, name);
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            });
    };


    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('please verify your email');
            });
    };

    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('Update user data');
            })
            .catch(error => {
                setError(error);
            });
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-50 rounded mb-2 ps-2' type="text" name="name" id="name" placeholder='Your name' required />
                <br />
                <input className='w-50 rounded mb-2 ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' required />
                <br />
                <input className='w-50 rounded mb-2 ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'><small>{error}</small></p>
            <p className="text-success">{success}</p>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link> </small></p>
        </div>
    );
};

export default Register;
