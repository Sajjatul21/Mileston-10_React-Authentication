import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.config';
import { useState } from 'react';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <div>

      <h1>FireBase + React</h1>

      <button onClick={handleGoogleSingIn}>Google SignIn</button>

      {user && <div className='card'>
        <h3>User: {user.displayName}</h3>
        <p>Email: {user.email}</p>
      </div>
      }
    </div>
  );
}

export default App;
