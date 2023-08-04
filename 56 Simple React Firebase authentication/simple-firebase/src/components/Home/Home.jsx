import React from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';
const Home = () => {
    const auth = getAuth(app);
    return (
        <div>
            <h3>This is Home</h3>
        </div>
    );
};

export default Home;
