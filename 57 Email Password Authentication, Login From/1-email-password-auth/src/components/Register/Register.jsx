import React from 'react';
import { useState } from 'react';

const Register = () => {
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
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email);
        console.log(password);

    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-50 rounded mb-2 ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' />
                <br />
                <input className='w-50 rounded mb-2 ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your password' />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;