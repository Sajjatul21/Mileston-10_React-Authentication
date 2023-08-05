import './App.css';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from './firebase/firebase.config';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  return (
    <div>

      <h1>FireBase + React</h1>
      <div className="card">
        <button>Google Sign IN</button>
      </div>

    </div>
  );
}

export default App;
