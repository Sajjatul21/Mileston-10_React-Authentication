import React from 'react';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('google mama is coming');
    };
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google login</button>
            {/* 58-4 Open google login popup and recap google popup sing up */}
        </div>
    );
};

export default Login;